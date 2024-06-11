import { ExtensionLoader } from '@ct'

export const extensionLoader: ExtensionLoader = () => import('./main-campaign/list')
// mainCampaignSetting: () => import('./main-campaign/setting'),
// sessionList: () => import('./session/list'),
