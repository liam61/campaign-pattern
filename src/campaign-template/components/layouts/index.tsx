import { ReactNode } from 'react'

import { PageBreadcrumbs, PageFooter, PageSteps, PageTabs } from '@components'
import { PageHeader, Spin } from 'antd'
import cn from 'classnames'
import { omit } from 'lodash'
import { CampaignLayoutProps } from 'src/campaign-template/types'

import { PageContent } from './Content'

import './index.scss'

export function CampaignPageLayout(props: CampaignLayoutProps): ReactNode {
  const { className, loading, children, layoutType, breadCrumbProps, headerProps, tabProps, stepProps, footerProps } =
    props

  return (
    <Spin spinning={!!loading}>
      <PageBreadcrumbs {...breadCrumbProps} />

      {/* TODO: check anchor & permission & onback */}
      <div className={cn('ct-template-layout', layoutType, className)}>
        <PageContent {...omit(props, 'children')}>
          <PageHeader {...headerProps} />

          <PageTabs {...tabProps} />

          <PageSteps {...stepProps} />

          {children}

          <PageFooter {...footerProps} />
        </PageContent>
      </div>
    </Spin>
  )
}
