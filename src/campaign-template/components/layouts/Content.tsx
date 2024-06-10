import { ReactNode } from 'react'

import { Form } from '@formily/antd'
import { Table } from 'antd'

import { CampaignLayoutProps } from '../../types'

export function PageContent(props: CampaignLayoutProps): ReactNode {
  const { children, layoutType, tableProps, formProps } = props

  if (layoutType === 'table') {
    const { tableRef, ...restTableProps } = tableProps || {}

    return (
      <Table.Provider table={tableRef}>
        <Table {...restTableProps}>{children}</Table>
      </Table.Provider>
    )
  }

  if (layoutType === 'form') {
    const { form, ...restFormProps } = formProps || {}

    return (
      <Form form={form} labelWidth={240} labelAlign="left" {...restFormProps}>
        {children}
      </Form>
    )
  }

  if (layoutType === 'noPermission') {
    return <NoPermission mode="page" />
  }

  return children
}
