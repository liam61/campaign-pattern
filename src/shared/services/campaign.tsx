import { FECampaign } from '../types'

import { campaignInfoFEMapper } from './data-mappers/campaign'

class CampaignService {
  async getCampaignDetail(payload: { campaignId: string }): Promise<FECampaign> {
    const { campaignId } = payload

    if (!campaignId) return {} as FECampaign

    const campaignInfo = await api.getCampaignDetail({ campaign_id: campaignId })

    return campaignInfoFEMapper(campaignInfo)
  }
}

export const campaignService = new CampaignService()
