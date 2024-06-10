import { ICampaign } from './../apis/types'
import { FECampaignKey } from './biz'

export interface FECampaign extends ICampaign {
  [FECampaignKey.CampaignRange]: [number, number]
}
