import { ICampaign } from '@apis'

import { FECampaignKey } from './biz'

export interface FECampaign extends ICampaign {
  [FECampaignKey.CampaignRange]: [number, number]
}
