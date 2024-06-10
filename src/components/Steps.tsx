import { ReactNode } from 'react'

import { StepProps, Steps, StepsProps } from 'antd'

export type PageStepProps = Omit<StepsProps, 'items'> & {
  items?: StepProps[]
}

export function PageSteps(props: PageStepProps): ReactNode {
  const { items, ...restProps } = props

  if (!items || items.length < 1) return null

  return (
    <section>
      <Steps {...restProps} items={items} />
    </section>
  )
}
