import { ReactNode } from 'react'

import { CTButtonProps } from '@shared/types'
import { Button, Space } from 'antd'
import { castArray } from 'lodash'

export interface PageHeaderProps {
  title: ReactNode
  extra?: ReactNode
  buttons?: CTButtonProps[]
}

export function PageHeader(props: PageHeaderProps): ReactNode {
  const { title, extra, buttons } = props

  const finalButtons = castArray(buttons).filter((item) => item.visible !== false)

  return (
    <div className="ct-page-header">
      <div className="ct-page-header__title">{title}</div>
      {!!extra && <div className="ct-page-header__extra">{extra}</div>}
      {!!finalButtons.length && (
        <Space className="ct-page-header__buttons" size={12}>
          {finalButtons.map((buttonProps) => (
            <Button {...buttonProps} />
          ))}
        </Space>
      )}
    </div>
  )
}
