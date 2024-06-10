import { apis, GetCampaignListReq, GetCampaignDetailReq, PageInfo } from '@apis'

import { FECampaign } from '../types'

import { campaignInfoFEMapper, campaignListFEMapper } from './data-mappers/campaign'

class CampaignService {
  async getCampaignDetail(payload: GetCampaignDetailReq): Promise<FECampaign> {
    const { campaign_id } = payload

    if (!campaign_id) return {} as FECampaign

    const { campaign: info } = await apis.getCampaignDetail({ campaign_id })

    return campaignInfoFEMapper(info)
  }
  async getCampaignList(
    payload: GetCampaignListReq['page_info'],
    filters: Record<string, string | number>
  ): Promise<{ list: FECampaign[]; page_info: PageInfo }> {
    // if (!payload || !filters) return {}

    const result = await apis.getCampaignList({
      page_info: payload,
      filters: {
        ...filters,
        // campaign_scene:
      },
    })

    const list = result?.campaign_list || []
    const page_info = result?.page_info || {}

    return {
      list: campaignListFEMapper(list),
      page_info,
    }
  }
}

export const campaignService = new CampaignService()
