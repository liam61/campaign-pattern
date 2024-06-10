import { lazy } from 'react'

import { Spin } from 'antd'

export const ProductCampaignListPage = lazy(
  () => import(/* webpackChunkName: "page.product-campaign-list" */ '@pages/ProudctCampaignList')
)

export const ProductCampaignDetailPage = lazy(
  () => import(/* webpackChunkName: "page.product-campaign-detail" */ '@pages/ProudctCampaignDetail')
)

export const Loading = (): JSX.Element => {
  return (
    <Spin spinning>
      <div style={{ height: '100vh' }} />
    </Spin>
  )
}
