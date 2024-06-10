import { apis, CampaignFunctionConfig, GetCampaignConfigReq } from '@apis'

class PageService {
  async getFunctionConfig(payload: GetCampaignConfigReq): Promise<CampaignFunctionConfig> {
    const { function_config: configs } = await apis.getFunctionConfig(payload)

    return configs
  }

  async getPermissionConfig() {}
}

export const pageService = new PageService()
