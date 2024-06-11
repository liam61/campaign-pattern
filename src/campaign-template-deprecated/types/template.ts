import { FC, ReactNode } from 'react'

import { Form as BaseForm } from '@formily/antd'
import { Field as BaseField } from '@formily/react'
import { Table } from 'antd'

// to avoid circle dep
import { CampaignTemplateSDK } from '../core/sdk'

import { CampaignDomain } from './core'
import { CampaignLayoutProps, LayoutType } from './layout'

const { Column: BaseColumn } = Table

export interface CampaignPageConfigs {
  //
}

export type CampaignPageProps = Omit<
  CampaignLayoutProps,
  'breadCrumbProps' | 'headerProps' | 'tabProps' | 'stepProps' | 'tableProps' | 'formProps' | 'footerProps'
> & {
  campaignDomain?: CampaignDomain
  // configs?: CampaignPageConfigs
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
        Table: typeof Table
        Column: typeof BaseColumn
        Action: typeof BaseColumn
        Footer: FC
      }
    : {
        BreadCrumb: FC
        Header: FC
        Step: FC
        Form: typeof BaseForm
        Field: typeof BaseField
        Footer: FC
      })
