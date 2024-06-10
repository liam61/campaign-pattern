import { ReactNode } from 'react'

import { Breadcrumb, BreadcrumbItemProps, Button } from 'antd'
import { isFunction, isString } from 'lodash'

export interface PageBreadCrumbProps {
  items: BreadCrumbItem[]
}

export type BreadCrumbItem = Pick<BreadcrumbItemProps, 'href' | 'onClick'> & { title: string }

export function PageBreadcrumbs(props: PageBreadCrumbProps): ReactNode {
  const { items } = props

  if (!items?.length) return null

  return (
    <Breadcrumb>
      {items.map((itemProps, index) => {
        const { title, onClick, href } = itemProps
        const itemClickable = isString(href) || isFunction(onClick)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClick = (ev: any): void => {
          if (isString(href)) {
            navTo(href)
            return
          }

          onClick?.(ev)
        }

        return (
          <Breadcrumb.Item key={title + index}>
            {itemClickable ? (
              <Button type="text" onClick={handleClick} style={{ padding: '4px 0' }}>
                {title}
              </Button>
            ) : (
              <div>{title}</div>
            )}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}
