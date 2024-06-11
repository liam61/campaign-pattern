/* eslint-disable import/no-default-export */
import { ReactNode, useMemo } from 'react'

import { CampaignTemplateSDK, DetailPageTemplate } from '@ct'

import { extensionLoader } from './extensions'

const { Header, Form, Field, Footer } = DetailPageTemplate

export default function ProductCampaignDetailPage(): ReactNode {
  const sdk = useMemo(() => new CampaignTemplateSDK(extensionLoader, {}), [])

  return (
    <DetailPageTemplate sdk={sdk}>
      <Form requestId="123" onInit={() => {}} onRequest={(id) => {}}>
        <Header />

        <Field name="campaign_id" onRequest={() => {}} onReaction={[]} />
        <Field name="campaign_name" />

        <Footer />
      </Form>
    </DetailPageTemplate>
  )
}
