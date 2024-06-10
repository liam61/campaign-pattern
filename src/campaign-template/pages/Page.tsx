import React, { FC, useEffect } from 'react'

import { CampaignPageLayout, PageLoading } from '../components'
import { CampaignInfoProvider } from '../context'
import { useCampaignTemplate } from '../hooks'
import { CampaignSubDomainPageProps, CheckAndInitPagePayload } from '../types'

const CampaignTemplatePage: FC<CampaignSubDomainPageProps> = (props) => {
  const { campaignDomain, layoutType, disabled, renderLoading = PageLoading } = props

  const { loading, pageProps, sdk, initiatePage } = useCampaignTemplate()

  useEffect(() => {
    // here pass all props to sdk
    initiatePage(props as unknown as CheckAndInitPagePayload)
  }, [])

  if (loading) return renderLoading()
  if (!pageProps) return null

  const mergedPageProps = {
    // loading,
    ...pageProps,
    ...props,
  }

  return (
    <CampaignInfoProvider renderLoading={renderLoading}>
      <CampaignPageLayout {...mergedPageProps} />
    </CampaignInfoProvider>
  )
}

export const CampaignListPage: FC<CampaignSubDomainPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="table" />
}

export const CampaignSettingPage: FC<CampaignSubDomainPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="form" />
}
