import { ComponentProps } from 'react'

import { JSXComponent } from '@formily/react'
import {
  BaseFieldProps,
  ColumnProps,
  FormLayoutProps,
  FormProps,
  PageFooterProps,
  PageHeaderProps,
  TableActionProps,
  TableProps,
  VoidFieldProps,
} from 'common-pattern'

import { PageStepProps, PageTabsProps } from './layout'
import { CheckAndInitPagePayload } from './template'

export type CampaignDomain = 'campaign' | 'subCampaign' | 'session'

export type CampaignSubDomain = 'campaignList' | 'campaignDetail' | 'sessionList' | 'sessionDetail'

export type CampaignSceneExtensionsLoader = Record<CampaignSubDomain, () => Promise<IExtension[]>>

export type CampaignSceneConfigs = Record<CampaignSubDomain, {}>

/**
 * the extension to implement
 */
export interface IExtension {
  name: string
  setup: (core: IExtensionCore, context: ExtensionContext) => Promise<void>
  dispose?: (core: IExtensionCore, context: ExtensionContext) => void
}

export type ExtensionProvider<T> = (config: { name?: string; content: T }) => void

export type ExtensionContext = CheckAndInitPagePayload & {
  campaignSubDomain: CampaignSubDomain
}

type FormItemProps = BaseFieldProps<ComponentProps<JSXComponent>>

export interface IExtensionCore {
  getContext: () => ExtensionContext

  // common
  provideHeader: ExtensionProvider<PageHeaderProps>
  provideTabs: ExtensionProvider<PageTabsProps>
  provideSteps: ExtensionProvider<PageStepProps>
  provideFooter: ExtensionProvider<PageFooterProps>

  // table
  provideTable: ExtensionProvider<Omit<TableProps, 'columns' | 'actions'>>
  provideTableColumns: ExtensionProvider<ColumnProps[]>
  provideTableActions: ExtensionProvider<TableActionProps[]>

  // form
  provideForm: ExtensionProvider<FormProps<Record<string, any>>>
  provideFormFields: ExtensionProvider<FormItemProps>
  provideFormSection: ExtensionProvider<VoidFieldProps<FormLayoutProps>>
}
