import { useContext } from 'react'

import { CampaignTemplateContext, CampaignTemplateContextValue } from '../context'

export const useCampaignTemplate = (): CampaignTemplateContextValue => useContext(CampaignTemplateContext)
