import { ICampaign } from '@apis'
import { FECampaign, FECampaignKey } from '@shared/types'

export const campaignInfoFEMapper = (campaignInfo: ICampaign): FECampaign => {
  if (!campaignInfo?.campaign_id) return {} as FECampaign

  return {
    ...campaignInfo,
    [FECampaignKey.CampaignRange]: [campaignInfo.start_time, campaignInfo.end_time],
    // ...
  }
}

export const campaignListFEMapper = (list: ICampaign[]): FECampaign[] => {
  if (!list?.length) return []

  return list.map(campaignInfoFEMapper)
}
