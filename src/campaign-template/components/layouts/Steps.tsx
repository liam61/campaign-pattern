import React, { FC } from 'react'

import { StepProps, Steps, StepsProps } from 'antd'

export type PageStepProps = Omit<StepsProps, 'items'> & {
  items?: StepProps[]
}

export const PageSteps: FC<PageStepProps> = (props) => {
  const { items, ...restProps } = props

  if (!items || items.length < 1) return null

  return (
    <Section gapBottom>
      <Steps {...restProps} items={items} />
    </Section>
  )
}
