/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageFooterProps, TabItemProps, PageStepItemProps } from '@components'
import { Field, VoidField } from '@formily/core'
import { CTButtonProps } from '@shared/types'
import { PageHeaderProps, TableProps } from 'antd'

import { CTColumnProps } from './layout'
import { InitCampaignPagePayload } from './template'

export type CampaignDomain = 'campaign' | 'session'

export type CampaignSubDomain = 'campaignList' | 'campaignDetail' | 'sessionList' | 'sessionDetail'

export type ExtensionLoader = () => Promise<IExtension[]>

export interface CampaignPageConfigs {
  //
}

/**
 * the extension to implement
 */
export interface IExtension {
  name: string
  setup: (core: IExtensionCore, context: ExtensionContext) => Promise<void>
  dispose?: (core: IExtensionCore, context: ExtensionContext) => void
}

export type ExtensionProvider<T> = (config: { name?: string; content: T }) => void

export type ExtensionContext = InitCampaignPagePayload & {
  // campaignPage: CampaignSubDomain
}

// type FormItemProps = BaseFieldProps<ComponentProps<JSXComponent>>

export interface IExtensionCore {
  getContext: () => ExtensionContext

  // common
  provideHeader: ExtensionProvider<PageHeaderProps>
  provideTab: ExtensionProvider<TabItemProps>
  provideStep: ExtensionProvider<PageStepItemProps>
  provideFooter: ExtensionProvider<PageFooterProps>

  // table  TODO: table and form type props
  provideTable: ExtensionProvider<Omit<TableProps<Record<string, any>>, 'columns'>>
  provideColumn: ExtensionProvider<CTColumnProps>
  provideAction: ExtensionProvider<CTButtonProps>

  // form
  provideForm: ExtensionProvider<FormProps<Record<string, any>>>
  provideField: ExtensionProvider<Field>
  provideFormSection: ExtensionProvider<VoidField>
}
