import { BreadcrumbItemProps, StepProps } from 'antd'

export interface CampaignLayoutProps {
  children?: JSX.Element
  layoutType?: 'table' | 'form' | 'noPermission'
  permCode?: string

  // common antd UI part
  loading?: boolean
  className?: string
  breadCrumbs?: BreadCrumbItem[] | null
  headerProps?: PageHeaderProps | null
  tabProps?: PageTabsProps | null
  stepProps?: PageStepProps | null
  tableProps?: TableSettingProps | null
  formProps?: FormSettingProps | null
  footerProps?: PageFooterProps | null

  renderLoading?: () => JSX.Element | null
}

export type BreadCrumbItem = Pick<BreadcrumbItemProps, 'href' | 'onClick' | 'className'> & { title: string }

export interface BreadCrumbProps {
  items: BreadCrumbItem[]
}

export type TabItemProps = TabPaneProps & {
  items?: TabItemProps[]
}

export type PageTabsProps = Omit<TabsProps, 'items'> & {
  items?: TabItemProps[]
}

export type PageStepProps = StepProps & {
  items?: StepProps[]
}

export type TableSettingProps = TableProps & {
  tableRef?: TableInstanceRef
}

export type FormSettingProps = FormProps<Record<string, any>>
