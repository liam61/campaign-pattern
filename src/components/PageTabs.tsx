import { ReactNode } from 'react'

import { TabPaneProps, Tabs, TabsProps } from 'antd'
import { castArray } from 'lodash'

export type PageTabsProps = Omit<TabsProps, 'items'> & {
  items?: TabItemProps[]
}

export type TabItemProps = TabPaneProps & {
  visible?: boolean
  items?: TabItemProps[] // for sub tab later
}

export function PageTabs(props: PageTabsProps): ReactNode {
  const { items, ...restTabProps } = props

  const finalItems = castArray(items).filter((item) => item.visible !== false)

  if (!finalItems.length) return null

  return (
    <Tabs {...restTabProps}>
      {finalItems.map((itemProps, index) => {
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
