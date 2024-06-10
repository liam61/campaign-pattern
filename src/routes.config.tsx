import { ReactNode, lazy } from 'react'

import { Spin } from 'antd'

export const ProductCampaignListPage = lazy(
  () => import(/* webpackChunkName: "page.product-campaign-list" */ '@pages/ProductCampaignList')
)

export const ProductCampaignDetailPage = lazy(
  () => import(/* webpackChunkName: "page.product-campaign-detail" */ '@pages/ProductCampaignDetail')
)

export const Loading = (): ReactNode => {
  return (
    <Spin spinning>
      <div style={{ height: '100vh' }} />
    </Spin>
  )
}
