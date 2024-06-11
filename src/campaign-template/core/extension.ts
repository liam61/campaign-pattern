import { assign } from 'lodash'

import { CampaignPageConfigs, ExtensionContext, IExtensionCore } from '../types'

export class ExtensionCore implements IExtensionCore {
  /**
   * rendering page context for Extension
   */
  private extensionContext = {} as ExtensionContext

  constructor(_configs?: CampaignPageConfigs) {
    //
  }

  /**
   *
   * private
   */
  setContext(context: Partial<ExtensionContext>): void {
    assign(this.extensionContext, context)
  }

  reset(): void {
    this.extensionContext = {} as ExtensionContext
  }

  getContext: IExtensionCore['getContext'] = () => {
    return this.extensionContext
  }

  provideHeader: IExtensionCore['provideHeader'] = (config) => {
    const { content } = config

    this.setContext({ headerProps: content })
  }

  provideTabs: IExtensionCore['provideHeader'] = (config) => {
    const { content } = config

    this.setContext({ tabProps: content })
  }

  provideSteps: IExtensionCore['provideSteps'] = (config) => {
    const { content } = config

    this.setContext({ stepProps: content })
  }

  provideFooter: IExtensionCore['provideFooter'] = (config) => {
    const { content } = config

    this.setContext({ footerProps: content })
  }
}
