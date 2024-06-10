import React, { FC, createContext } from 'react'

import { useInitiateCampaignTemplate } from '../hooks'
import { CampaignTemplateContextValue, InitCampaignTemplateProps } from '../types'

const CampaignTemplateInitialValues = {
  sdk: null,
  loading: false,
  pageProps: null,
  initiatePage: async (): Promise<null> => null,
}

export const CampaignTemplateContext = createContext<CampaignTemplateContextValue>(CampaignTemplateInitialValues)

export const CampaignTemplateProvider: FC<InitCampaignTemplateProps> = (props) => {
  const { children } = props

  const { loading, ...restValue } = useInitiateCampaignTemplate(props)

  const contextValue: CampaignTemplateContextValue = {
    loading,
    ...restValue,
  }

  return <CampaignTemplateContext.Provider value={contextValue}>{children}</CampaignTemplateContext.Provider>
}
