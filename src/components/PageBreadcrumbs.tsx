import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumb, BreadcrumbItemProps, Button } from 'antd'
import { isFunction, isString } from 'lodash'

export interface PageBreadCrumbProps {
  items: PageBreadCrumbItem[]
}

export type PageBreadCrumbItem = Pick<BreadcrumbItemProps, 'href' | 'onClick'> & { title: string }

export function PageBreadcrumbs(props: PageBreadCrumbProps): ReactNode {
  const { items } = props

  const navigate = useNavigate()

  if (!items?.length) return null

  return (
    <Breadcrumb className="ct-page-breadcrumb">
      {items.map((itemProps, index) => {
        const { title, onClick, href } = itemProps
        const itemClickable = isString(href) || isFunction(onClick)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleClick = (ev: any): void => {
          if (isString(href)) {
            navigate(href, {})
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
