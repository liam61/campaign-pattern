import { CampaignScene } from './campaign'

export interface CampaignFunctionConfig {
  support_mechanic_label: '0' | '1'
  // ...
}

export interface CampaignFunctionConfigRes {
  campaign_scene: CampaignScene
  function_config: CampaignFunctionConfig
}
