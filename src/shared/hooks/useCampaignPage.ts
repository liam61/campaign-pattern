import { useContext } from 'react'

import { CampaignPageContextValue, CampaignPageContext } from '../context'

export const useCampaignPage = (): CampaignPageContextValue => useContext(CampaignPageContext)
