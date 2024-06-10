import { CampaignSceneExtensionsLoader } from '@ct'

export const extensionsLoader: CampaignSceneExtensionsLoader = {
  mainCampaignList: () => import('./main-campaign/list'),
  mainCampaignSetting: () => import('./main-campaign/setting'),
  // sessionList: () => import('./session/list'),
  // sessionSetting: () => import('./session/setting'),
}
