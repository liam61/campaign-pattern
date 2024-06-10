import { useMemo } from 'react'

import { useRequest } from 'ahooks'

import {
  CampaignTemplateContextValue,
  CampaignLayoutProps,
  CheckAndInitPagePayload,
  InitCampaignTemplateProps,
} from '../types'

export const useInitiateCampaignTemplate = (props: InitCampaignTemplateProps): CampaignTemplateContextValue => {
  const { sdk, renderPage } = props

  // set render page immediately
  useMemo(() => {
    sdk.setRenderPage(renderPage)
  }, [])

  const {
    loading,
    data: pageProps,
    runAsync: initiatePage,
  } = useRequest<CampaignLayoutProps | null, [CheckAndInitPagePayload]>(
    (userProps) => {
      return sdk.checkAndInitPage(userProps)
    },
    { manual: true }
  )

  return {
    ...props,
    loading,
    pageProps,
    initiatePage,
  }
}
