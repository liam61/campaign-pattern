import { ReactNode } from 'react'

import { CampaignTemplateProvider } from '../context'
import { CompoundedTemplateComponent, TemplateComponentProps } from '../types'

import { CampaignListPage, CampaignDetailPage } from './Page'

// template pages
function _CampaignList(props: TemplateComponentProps): ReactNode {
  const { sdk, ...restProps } = props

  return (
    <CampaignTemplateProvider sdk={sdk}>
      <CampaignListPage {...restProps} campaignDomain="campaign" />
    </CampaignTemplateProvider>
  )
}

function _CampaignDetail(props: TemplateComponentProps): ReactNode {
  const { sdk, ...restProps } = props

  return (
    <CampaignTemplateProvider sdk={sdk}>
      <CampaignDetailPage {...restProps} campaignDomain="campaign" />
    </CampaignTemplateProvider>
  )
}

function _SessionList(props: TemplateComponentProps): ReactNode {
  const { sdk, ...restProps } = props

  return (
    <CampaignTemplateProvider sdk={sdk}>
      <CampaignListPage {...restProps} campaignDomain="session" />
    </CampaignTemplateProvider>
  )
}

// const SessionListDomain: FC<CampaignPageProps> = (props) => {
//   const { listPageProps, detailPageProps } = props

//   return (
//     <>
//       <CampaignListPage {...listPageProps} campaignDomain="session" />
//       <CampaignDetailPage {...detailPageProps} campaignDomain="session" />
//     </>
//   )
// }

export const ListPageTemplate = _CampaignList as CompoundedTemplateComponent<'table'>

export const DetailPageTemplate = _CampaignDetail as CompoundedTemplateComponent<'form'>
