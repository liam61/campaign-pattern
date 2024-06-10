import { CampaignScene } from './campaign'

export interface CampaignFunctionConfig {
  support_mechanic_label: '0' | '1'
  // ...
}

export interface GetCampaignConfigReq {
  campaign_scene: CampaignScene
}

export interface GetFunctionConfigRes {
  function_config: CampaignFunctionConfig
}
