/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

import { PageTabsProps, PageStepProps, PageFooterProps, PageBreadCrumbProps } from '@components'
import { FormProps } from '@formily/antd'
import { PageHeaderProps, TableProps } from 'antd'
import { ColumnProps } from 'antd/lib/table'

export type LayoutType = 'table' | 'form'

export interface CampaignLayoutProps {
  children?: ReactNode
  layoutType?: LayoutType
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

  renderLoading?: () => ReactNode
}

export type PageTableProps = TableProps<Record<string, any>>

export type PageFormProps = FormProps

export type CTColumnProps<T = Record<string, any>> = ColumnProps<T> & {
  renderColumn?: () => void
}
