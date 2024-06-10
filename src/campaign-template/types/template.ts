import { CampaignTemplateComponentProps, CampaignSubDomainPageProps } from './page'

export type InitCampaignTemplateProps = CampaignTemplateComponentProps & {
  //
}

export type InitPagePayload = Required<Pick<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'disabled'>> &
  CampaignSubDomainPageProps
