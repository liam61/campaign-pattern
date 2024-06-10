import { ReactNode, createContext } from 'react'

import { CampaignTemplateSDK } from '../core'
import { useInitiateCampaignTemplate } from '../hooks'
import { CampaignLayoutProps, InitPagePayload, InitCampaignTemplateProps } from '../types'

export interface CampaignTemplateContextValue {
  sdk: CampaignTemplateSDK
  loading: boolean
  /**
   * parsed page props
   */
  pageProps?: CampaignLayoutProps | null
  initiatePage: (payload: InitPagePayload) => Promise<CampaignLayoutProps | null>
}

const CampaignTemplateInitialValues = {
  sdk: null,
  loading: false,
  pageProps: null,
  initiatePage: async (): Promise<null> => null,
} as unknown as CampaignTemplateContextValue

export const CampaignTemplateContext = createContext<CampaignTemplateContextValue>(CampaignTemplateInitialValues)

export function CampaignTemplateProvider(props: InitCampaignTemplateProps): ReactNode {
  const { children } = props

  const { loading, ...restValue } = useInitiateCampaignTemplate(props)

  const contextValue: CampaignTemplateContextValue = {
    loading,
    ...restValue,
  }

  return <CampaignTemplateContext.Provider value={contextValue}>{children}</CampaignTemplateContext.Provider>
}
