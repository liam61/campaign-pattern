import { CampaignFunctionConfig } from '../apis'

class PageService {
  async getFunctionConfig(): Promise<CampaignFunctionConfig> {
    const functionConfig = await api.getCampaignFunctionConfig({})

    return functionConfig
  }
}

export const pageService = new PageService()
