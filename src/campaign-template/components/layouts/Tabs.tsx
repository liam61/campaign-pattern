import { FC } from 'react'

import { Tabs } from 'antd'

import { PageTabsProps } from '../../types'

export const PageTabs: FC<PageTabsProps> = (props) => {
  const { items, ...restTabProps } = props

  if (!items?.length) return null

  return (
    <Tabs {...restTabProps}>
      {items.map((itemProps, index) => {
        const { items: subItems, children, ...restItemProps } = itemProps

        return (
          <Tabs.TabPane key={index} {...restItemProps}>
            {subItems?.length ? (
              <Tabs type="button">
                {subItems.map((subItemProps, subIndex) => {
                  return <Tabs.TabPane key={`${index}-${subIndex}`} {...subItemProps} />
                })}
              </Tabs>
            ) : (
              children
            )}
          </Tabs.TabPane>
        )
      })}
    </Tabs>
  )
}
