import { ICampaign } from 'src/shared/apis'
import { FECampaign, FECampaignKey } from 'src/shared/types'

export const campaignInfoFEMapper = (campaignInfo: ICampaign): FECampaign => {
  return {
    ...campaignInfo,
    [FECampaignKey.CampaignRange]: [campaignInfo.start_time, campaignInfo.end_time],
    // ...
  }
}
