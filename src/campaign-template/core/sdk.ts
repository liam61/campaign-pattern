import {
  CampaignLayoutProps,
  CampaignSceneConfigs,
  CampaignSceneExtensionsLoader,
  CampaignSubDomain,
  CheckAndInitPagePayload,
  ExtensionContext,
  IExtension,
} from '../types'
import { checkRenderPage, performExtensions } from '../utils'

import { ExtensionCore } from './extension'
import { CampaignTemplateRenderer } from './renderer'

export class CampaignTemplateSDK extends CampaignTemplateRenderer {
  private configs = {} as CampaignSceneConfigs
  private extensionsLoader = {} as CampaignSceneExtensionsLoader
  private extensionCore = {} as ExtensionCore

  constructor(loader: CampaignSceneExtensionsLoader, configs?: CampaignSceneConfigs) {
    super()

    this.extensionCore = new ExtensionCore(configs)

    this.registerExtensions(loader)
    this.setConfigs(configs || ({} as CampaignSceneConfigs))
  }

  async setRenderPage(page: CampaignSubDomain): Promise<void> {
    await this.reset()
    this.extensionCore.setContext({ campaignSubDomain: page })
  }

  getExtensionContext(): ExtensionContext {
    return this.extensionCore.getContext()
  }

  registerExtensions(loader: CampaignSceneExtensionsLoader): void {
    this.extensionsLoader = performExtensions(
      loader,
      () => this.extensionCore,
      () => this.getExtensionContext()
    )
  }

  async getExtensions(): Promise<IExtension[]> {
    return this.extensionsLoader[this.getExtensionContext().campaignSubDomain]?.() || []
  }

  setConfigs(configs: CampaignSceneConfigs): void {
    this.configs = configs
  }

  getConfigs(): CampaignSceneConfigs {
    return this.configs
  }

  async reset(): Promise<void> {
    const extensions = await this.getExtensions()

    extensions.forEach((ex) => ex.dispose)
    this.configs = {} as CampaignSceneConfigs
    this.extensionCore.reset()
  }

  /**
   * 1. link subDomain page and SDK
   * 2. initiate page extensions
   * 3. return parsed layout props
   */
  async checkAndInitPage(payload: CheckAndInitPagePayload): Promise<CampaignLayoutProps | null> {
    if (!checkRenderPage(payload, this.getExtensionContext().campaignSubDomain)) return null

    this.extensionCore.setContext(payload)

    return this.parse()
  }

  async parse(): Promise<CampaignLayoutProps | null> {
    const extensions = await this.getExtensions()

    extensions.forEach((ex) => ex.setup)

    return this.getExtensionContext()
  }
}
