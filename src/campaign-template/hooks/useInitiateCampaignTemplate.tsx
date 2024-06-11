import { useRequest } from 'ahooks'

import { CampaignTemplateContextValue } from '../context'
import { CampaignLayoutProps, InitCampaignPagePayload, InitCampaignTemplateProps } from '../types'

export const useInitiateCampaignTemplate = (props: InitCampaignTemplateProps): CampaignTemplateContextValue => {
  const { sdk } = props

  const {
    loading,
    data,
    runAsync: initiatePage,
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
    initiatePage,
  }
}
