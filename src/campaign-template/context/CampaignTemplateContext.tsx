import { ReactNode, createContext } from 'react'

import { CampaignTemplateSDK } from '../core'
import { useInitiateCampaignTemplate } from '../hooks'
import { CampaignLayoutProps, InitCampaignPagePayload, InitCampaignTemplateProps } from '../types'

export interface CampaignTemplateContextValue {
  sdk: CampaignTemplateSDK
  loading: boolean
  /**
   * parsed page props
   */
  data?: CampaignLayoutProps | null
  initiatePage: (payload: InitCampaignPagePayload) => Promise<CampaignLayoutProps | null>
}

const CampaignTemplateInitialValues = {
  sdk: null,
  loading: false,
  data: null,
  initiatePage: async (): Promise<null> => null,
} as unknown as CampaignTemplateContextValue

export const CampaignTemplateContext = createContext<CampaignTemplateContextValue>(CampaignTemplateInitialValues)

export function CampaignTemplateProvider(props: InitCampaignTemplateProps): ReactNode {
  const { children } = props

  const { loading, ...restValue } = useInitiateCampaignTemplate(props)

  return (
    <CampaignTemplateContext.Provider
      value={{
        loading,
        ...restValue,
      }}
    >
      {children}
    </CampaignTemplateContext.Provider>
  )
}
