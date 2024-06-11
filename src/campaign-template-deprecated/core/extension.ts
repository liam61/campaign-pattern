import { TableProps } from 'antd'
import { assign } from 'lodash'
import { CTButtonProps } from 'src/shared/types'

import { CTColumnProps, CampaignPageConfigs, ExtensionContext, ExtensionProvider, IExtensionCore } from '../types'

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

  provideFooter: IExtensionCore['provideFooter'] = (config) => {
    const { content } = config

    this.setContext({ footerProps: content })
  }

  provideTable: ExtensionProvider<Omit<TableProps<Record<string, any>>, 'columns'>>
  provideColumn: ExtensionProvider<CTColumnProps>
  provideAction: ExtensionProvider<CTButtonProps>
}
