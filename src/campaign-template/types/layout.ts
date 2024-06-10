import { ReactNode } from 'react'

import { PageTabsProps, PageStepProps, PageFooterProps, PageBreadCrumbProps } from '@components'
import { FormProps } from '@formily/antd'
import { PageHeaderProps, TableProps } from 'antd'

export interface CampaignLayoutProps {
  children?: ReactNode
  layoutType?: 'table' | 'form'
  permission?: string

  // common
  loading?: boolean
  className?: string

  // antd
  breadCrumbProps?: PageBreadCrumbProps | null
  headerProps?: PageHeaderProps | null
  tabProps?: PageTabsProps | null
  stepProps?: PageStepProps | null
  tableProps?: PageTableProps | null
  formProps?: PageFormProps | null
  footerProps?: PageFooterProps | null

  renderLoading?: () => ReactNode | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageTableProps = TableProps<Record<string, any>>

export type PageFormProps = FormProps
