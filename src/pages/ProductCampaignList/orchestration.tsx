import { ReactNode } from 'react'

import { CampaignTemplateSDK, ListPageTemplate } from '@ct'

import { extensionLoader } from './extensions'

const { Tabs, Table, Column, Action } = ListPageTemplate

const sdk = new CampaignTemplateSDK(extensionLoader, {})

function ProductCampaignListTemplate(): ReactNode {
  return (
    <ListPageTemplate sdk={sdk}>
      <Tabs />

      <Header />

      <Table>
        <Column />
        <Column />
        <Column />

        <Action />
        <Action />
      </Table>
    </ListPageTemplate>
  )
}

export const ProductCampaignListPage = sdk.renderToPage(ProductCampaignListTemplate)
