import { FC, ReactNode, useEffect } from 'react'

import { CampaignPageProvider } from '@shared/context'

import { CampaignPageLayout, PageLoading } from '../components'
import { useCampaignTemplate } from '../hooks'
import { CampaignPageProps, InitCampaignPagePayload } from '../types'

function CampaignTemplatePage(props: CampaignPageProps): ReactNode {
  const { campaignDomain, layoutType, renderLoading = PageLoading } = props

  const { loading, data: parsedPageProps, initiatePage } = useCampaignTemplate()

  useEffect(() => {
    // props passed by wrappers
    initiatePage(props as unknown as InitCampaignPagePayload)
  }, [])

  if (loading) return renderLoading()
  if (!parsedPageProps) return null

  return (
    <CampaignPageProvider renderLoading={renderLoading}>
      <CampaignPageLayout {...parsedPageProps} {...props} />
    </CampaignPageProvider>
  )
}

export const CampaignListPage: FC<CampaignPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="table" />
}

export const CampaignDetailPage: FC<CampaignPageProps> = (props) => {
  return <CampaignTemplatePage {...props} layoutType="form" />
}
