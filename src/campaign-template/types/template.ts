// to avoid circle dep
import { CampaignTemplateSDK } from '../core/sdk'

import { CampaignLayoutProps } from './layout'
import { CampaignTemplateComponentProps, CampaignSubDomainPageProps } from './page'

export interface CampaignTemplateContextValue {
  sdk: CampaignTemplateSDK
  loading: boolean
  /**
   * parsed page props
   */
  pageProps?: CampaignLayoutProps | null
  initiatePage: (payload: CheckAndInitPagePayload) => Promise<CampaignLayoutProps | null>
}

export type InitCampaignTemplateProps = CampaignTemplateComponentProps & {
  //
}

/**
 * choose some props as required
 */
export type CheckAndInitPagePayload = Required<
  Pick<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'disabled'>
> &
  CampaignSubDomainPageProps
