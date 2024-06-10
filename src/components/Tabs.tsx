import { ReactNode } from 'react'

import { Tabs } from 'antd'

import { PageTabsProps } from '../campaign-template/types'

export function PageTabs(props: PageTabsProps): ReactNode {
  const { items, ...restTabProps } = props

  if (!items?.length) return null

  return (
    <Tabs {...restTabProps}>
      {items.map((itemProps, index) => {
        const { children, ...restItemProps } = itemProps

        return (
          <Tabs.TabPane key={index} {...restItemProps}>
            {children}
          </Tabs.TabPane>
        )
      })}
    </Tabs>
  )
}
