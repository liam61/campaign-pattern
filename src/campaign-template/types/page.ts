import { FC, ReactNode } from 'react'

// to avoid circle dep
import { CampaignTemplateSDK } from '../core/sdk'

import { CampaignDomain, CampaignSubDomain } from './core'
import { CampaignLayoutProps } from './layout'

export type CampaignTemplateRoutePages = Record<CampaignSubDomain, (() => ReactNode) | null>

export interface CampaignTemplateComponentProps {
  children?: ReactNode
  sdk: CampaignTemplateSDK
  /**
   * the subdomain page to render
   */
  renderPage: CampaignSubDomain
}

export type CampaignTemplateAsComponent = FC<CampaignTemplateComponentProps> & {
  Campaign: FC<CampaignDomainPageProps>
  Session: FC<CampaignDomainPageProps>
}

export interface CampaignDomainPageProps {
  listPageProps?: Omit<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'formProps'>
  detailPageProps?: Omit<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'tableProps'>
}

export type CampaignSubDomainPageProps = CampaignLayoutProps & {
  campaignDomain?: CampaignDomain
  disabled?: boolean
}
