import { CampaignTemplateComponentProps, CampaignSubDomainPageProps } from './page'

export type InitCampaignTemplateProps = CampaignTemplateComponentProps & {
  //
}

/**
 * choose some props as required
 */
export type InitPagePayload = Required<Pick<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'disabled'>> &
  CampaignSubDomainPageProps
