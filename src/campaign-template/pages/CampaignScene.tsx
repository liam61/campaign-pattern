import { FC } from 'react'

import { CampaignTemplateProvider } from '../context'
import { CampaignTemplateAsComponent, CampaignTemplateComponentProps, CampaignDomainPageProps } from '../types'

import { CampaignListPage, CampaignSettingPage } from './Page'

const _CampaignTemplateComponent: FC<CampaignTemplateComponentProps> = (props) => {
  const { children } = props

  return <CampaignTemplateProvider {...props}>{children}</CampaignTemplateProvider>
}

// domains
const CampaignDomain: FC<CampaignDomainPageProps> = (props) => {
  const { listPageProps, detailPageProps } = props

  return (
    <>
      <CampaignListPage {...listPageProps} campaignDomain="campaign" />
      <CampaignSettingPage {...detailPageProps} campaignDomain="campaign" />
    </>
  )
}

const SessionDomain: FC<CampaignDomainPageProps> = (props) => {
  const { listPageProps, detailPageProps } = props

  return (
    <>
      <CampaignListPage {...listPageProps} campaignDomain="session" />
      <CampaignSettingPage {...detailPageProps} campaignDomain="session" />
    </>
  )
}

export const CampaignTemplateComponent = _CampaignTemplateComponent as CampaignTemplateAsComponent

CampaignTemplateComponent.Campaign = CampaignDomain
CampaignTemplateComponent.Session = SessionDomain
