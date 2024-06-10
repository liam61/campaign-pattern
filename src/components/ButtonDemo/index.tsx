import { ReactNode, useState } from 'react'

import { Button, ButtonProps } from 'antd'

import { useDemoPermission } from './hooks'

export * from './hooks'

type ButtonDemoProps = ButtonProps & {
  permission?: string | boolean
}

export function PermissionButtonDemo(props: ButtonDemoProps): ReactNode {
  const { permission, ...restProps } = props

  const { loading, hasPerm } = useDemoPermission({ code: permission })
  const [visible, setVisible] = useState(false)

  if (loading) return <div>loading...</div>
  if (!hasPerm) return null

  const handleClick = (): void => {
    setVisible(!visible)
  }

  return (
    <>
      <Button {...restProps} onClick={handleClick}>
        Button with Permission
      </Button>
      {!!visible && <div>Modal show</div>}
    </>
  )
}
