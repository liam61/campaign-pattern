import { FC, ReactNode } from 'react'

// to avoid circle dep
import { CampaignTemplateSDK } from '../core/sdk'

import { CampaignDomain } from './core'
import { CampaignLayoutProps, LayoutType } from './layout'

export type CampaignPageProps = Omit<
  CampaignLayoutProps,
  'breadCrumbProps' | 'headerProps' | 'tabProps' | 'stepProps' | 'tableProps' | 'formProps' | 'footerProps'
> & {
  campaignDomain?: CampaignDomain
}

export interface InitCampaignTemplateProps {
  children?: ReactNode
  sdk: CampaignTemplateSDK
}

export type InitCampaignPagePayload = Required<Pick<CampaignPageProps, 'campaignDomain' | 'layoutType'>> &
  CampaignPageProps

export type TemplateComponentProps = InitCampaignTemplateProps &
  Omit<CampaignPageProps, 'campaignDomain' | 'layoutType'>
// detailPageProps?: Omit<CampaignSubDomainPageProps, 'campaignDomain' | 'layoutType' | 'tableProps'>

export type CompoundedTemplateComponent<T extends LayoutType> = FC<TemplateComponentProps> &
  (T extends 'table'
    ? {
        BreadCrumb: FC
        Header: FC
        Tabs: FC
        Table: FC
        Column: FC
        Action: FC
        Footer: FC
      }
    : {
        BreadCrumb: FC
        Header: FC
        Step: FC
        Form: FC
        Field: FC
        Footer: FC
      })
