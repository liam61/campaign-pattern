import { ReactNode } from 'react'

import { StepProps, Steps, StepsProps } from 'antd'
import { castArray } from 'lodash'

export type PageStepProps = Omit<StepsProps, 'items'> & {
  items?: (StepProps & { visible?: boolean })[]
}

export function PageSteps(props: PageStepProps): ReactNode {
  const { items, ...restProps } = props

  const finalItems = castArray(items).filter((item) => item.visible !== false)

  if (finalItems.length < 1) return null

  return (
    <section className="ct-page-steps">
      <Steps {...restProps} items={finalItems} />
    </section>
  )
}
