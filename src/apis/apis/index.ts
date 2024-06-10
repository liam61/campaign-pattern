import { client } from '../client'
import {
  CreateCampaignReq,
  CreateCampaignRes,
  DeleteCampaignReq,
  GetCampaignConfigReq,
  GetCampaignDetailReq,
  GetCampaignDetailRes,
  GetCampaignListReq,
  GetCampaignListRes,
  GetFunctionConfigRes,
  UpdateCampaignReq,
  UpdateCampaignRes,
} from '../types'

const getCampaignDetail = async (payload: GetCampaignDetailReq): Promise<GetCampaignDetailRes> => {
  return client.post<GetCampaignDetailReq, GetCampaignDetailRes>('/campaign/get_campaign_detail', payload)
}

const createCampaign = async (payload: CreateCampaignReq): Promise<CreateCampaignRes> => {
  return client.post<CreateCampaignReq, CreateCampaignRes>('/campaign/get_campaign_detail', payload)
}

const updateCampaign = async (payload: UpdateCampaignReq): Promise<UpdateCampaignRes> => {
  return client.post<UpdateCampaignReq, UpdateCampaignRes>('/campaign/get_campaign_detail', payload)
}

const deleteCampaign = async (payload: DeleteCampaignReq): Promise<void> => {
  return client.post<DeleteCampaignReq, void>('/campaign/get_campaign_detail', payload)
}

const getCampaignList = async (payload: GetCampaignListReq): Promise<GetCampaignListRes> => {
  return client.post<GetCampaignListReq, GetCampaignListRes>('/campaign/get_campaign_list', payload)
}

const getFunctionConfig = async (payload: GetCampaignConfigReq): Promise<GetFunctionConfigRes> => {
  return client.post<GetCampaignConfigReq, GetFunctionConfigRes>('/config/campaign-config', payload)
}

// TODO:
const getPermission = async (payload: GetCampaignDetailReq): Promise<GetCampaignDetailRes> => {
  return client.post<GetCampaignDetailReq, GetCampaignDetailRes>('/config/auth', payload)
}

export const apis = {
  getCampaignList,
  getCampaignDetail,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getFunctionConfig,
  getPermission,
}
