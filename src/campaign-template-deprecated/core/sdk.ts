import {
  CampaignLayoutProps,
  CampaignPageConfigs,
  ExtensionLoader,
  CampaignSubDomain,
  InitCampaignPagePayload,
  ExtensionContext,
  IExtension,
} from '../types'
import { performExtensions } from '../utils'

import { ExtensionCore } from './extension'
import { CampaignTemplateRenderer } from './renderer'

export class CampaignTemplateSDK extends CampaignTemplateRenderer {
  private configs = {} as CampaignPageConfigs
  private extensionCore = {} as ExtensionCore

  private loader = (async () => []) as ExtensionLoader

  constructor(loader: ExtensionLoader, configs?: CampaignPageConfigs) {
    super()

    this.extensionCore = new ExtensionCore(configs)

    this.registerExtensions(loader)
    this.setConfigs(configs || ({} as CampaignPageConfigs))
  }

  getExtensionContext(): ExtensionContext {
    return this.extensionCore.getContext()
  }

  registerExtensions(loader: ExtensionLoader): void {
    this.loader = performExtensions(
      loader,
      () => this.extensionCore,
      () => this.getExtensionContext()
    )
  }

  async getExtensions(): Promise<IExtension[]> {
    return this.loader?.() || []
  }

  setConfigs(configs: CampaignPageConfigs): void {
    this.configs = configs
  }

  getConfigs(): CampaignPageConfigs {
    return this.configs
  }

  async reset(): Promise<void> {
    const extensions = await this.getExtensions()

    extensions.forEach((ex) => ex.dispose)
    this.configs = {} as CampaignPageConfigs
    this.extensionCore.reset()
  }

  /**
   * 1. link subDomain page and SDK
   * 2. initiate page extensions
   * 3. return parsed layout props
   */
  async initTemplate(payload: InitCampaignPagePayload): Promise<CampaignLayoutProps | null> {
    // if (!checkRenderPage(payload, this.getExtensionContext().campaignPage)) return null
    this.extensionCore.setContext(payload)

    return this.parse()
  }

  async parse(): Promise<CampaignLayoutProps | null> {
    const extensions = await this.getExtensions()

    extensions.forEach((ex) => ex.setup)

    return this.getExtensionContext()
  }
}
