import { FC, ReactNode, useEffect } from 'react'

import { CampaignPageProvider } from '@shared/context'

import { CampaignPageLayout } from '../components'
import { useCampaignTemplate } from '../hooks'
import { CampaignSubDomainPageProps, InitPagePayload } from '../types'

function CampaignTemplatePage(props: CampaignSubDomainPageProps): ReactNode {
  const { campaignDomain, layoutType, disabled, renderLoading = PageLoading } = props

  const { loading, pageProps, sdk, initiatePage } = useCampaignTemplate()

  useEffect(() => {
    // here pass all props to sdk
    initiatePage(props as unknown as InitPagePayload)
  }, [])

  if (loading) return renderLoading()
  if (!pageProps) return null

  const mergedPageProps = {
    // loading,
    ...pageProps,
    ...props,
  }

  return (
    <CampaignPageProvider renderLoading={renderLoading}>
      <CampaignPageLayout {...mergedPageProps} />
    </CampaignPageProvider>
  )
}

export const CampaignListPage: FC<CampaignSubDomainPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="table" />
}

export const CampaignSettingPage: FC<CampaignSubDomainPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="form" />
}
