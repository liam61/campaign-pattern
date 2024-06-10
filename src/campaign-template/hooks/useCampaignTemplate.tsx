import { useContext } from 'react'

import { CampaignTemplateContext } from '../context'
import { CampaignTemplateContextValue } from '../types'

export const useCampaignTemplate = (): CampaignTemplateContextValue => useContext(CampaignTemplateContext)
