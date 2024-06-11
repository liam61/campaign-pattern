import { useRequest, useUnmount } from 'ahooks'

import { CampaignTemplateContextValue } from '../context'
import { CampaignLayoutProps, InitCampaignPagePayload, InitCampaignTemplateProps } from '../types'

export const useInitiateCampaignTemplate = (props: InitCampaignTemplateProps): CampaignTemplateContextValue => {
  const { sdk } = props

  useUnmount(() => {
    sdk.reset()
  })

  const {
    loading,
    data,
    runAsync: init,
  } = useRequest<CampaignLayoutProps | null, [InitCampaignPagePayload]>(
    (userProps) => {
      return sdk.initTemplate(userProps)
    },
    { manual: true }
  )

  return {
    ...props,
    loading,
    data,
    init,
  }
}
