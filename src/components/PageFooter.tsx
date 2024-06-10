import { ReactNode } from 'react'

import { CTButtonProps } from '@shared/types'
import { Button, Space } from 'antd'
import { castArray } from 'lodash'

export interface PageFooterProps {
  buttons?: CTButtonProps[]
}

export function PageFooter(props: PageFooterProps): ReactNode {
  const { buttons } = props

  const finalButtons = castArray(buttons).filter((item) => item.visible !== false)

  if (!finalButtons.length) return null

  return (
    <div className="ct-page-footer">
      <Space className="ct-page-footer__buttons" size={12}>
        {finalButtons.map((buttonProps) => (
          <Button {...buttonProps} />
        ))}
      </Space>
    </div>
  )
}
