/* eslint-disable import/no-default-export */
import { ReactNode, useMemo } from 'react'

import { CampaignTemplateSDK, ListPageTemplate } from '@ct'

import { extensionLoader } from './extensions'

const { Header, Tabs, Table, Column, Action } = ListPageTemplate

export default function ProductCampaignListPage(): ReactNode {
  const sdk = useMemo(() => new CampaignTemplateSDK(extensionLoader, {}), [])

  return (
    <ListPageTemplate sdk={sdk}>
      <TableContextProvider onInit={() => {}}>
        <Header />

        <Tabs />

        <Table onRequest={() => {}}>
          <Column dataIndex="campaign_id" onRequest={() => {}} onReaction={[]} />
          <Column />
          <Column />

          <Action />
          <Action />
        </Table>
      </TableContextProvider>
    </ListPageTemplate>
  )
}
