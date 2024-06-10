import React, { FC } from 'react'

import { Spin } from 'antd'
import cn from 'classnames'
import { omit } from 'lodash'

import { CampaignLayoutProps } from '../../types'

import { PageBreadcrumbs } from './Breadcrumbs'
import { PageContent } from './Content'
import { PageSteps } from './Steps'
import { PageTabs } from './Tabs'

import styles from './index.scss'

export const CampaignPageLayout: FC<CampaignLayoutProps> = (props) => {
  const { className, loading, children, layoutType, breadCrumbs, headerProps, tabProps, stepProps, footerProps } = props

  return (
    <Spin spinning={!!loading}>
      <PageBreadcrumbs items={breadCrumbs || []} />

      {/* TODO: check anchor & permission & onback */}
      <Page className={cn(styles.campaignLayoutPage, layoutType, className)}>
        <PageContent {...omit(props, 'children')}>
          <PageHeader {...headerProps} />

          <PageTabs {...tabProps} />

          <PageSteps {...stepProps} />

          {children}

          <PageFooter {...footerProps} />
        </PageContent>
      </Page>
    </Spin>
  )
}

// CampaignPageLayout.PageBreadcrumbs = PageBreadcrumbs;
// CampaignPageLayout.PageContent = PageContent;
// CampaignPageLayout.PageHeader = PageHeader;
// CampaignPageLayout.PageSteps = PageSteps;
// CampaignPageLayout.PageTabs = PageTabs;
// CampaignPageLayout.PageFooter = PageFooter;
