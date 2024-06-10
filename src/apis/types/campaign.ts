export enum CampaignScene {
  Product = 'PRODUCT',
  FlashSale = 'FLASH_SALE',
}

export enum CampaignStatus {
  Draft = 'DRAFT',
  Upcoming = 'UPCOMING',
  Ongoing = 'ONGOING',
  Ended = 'ENDED',
}

export interface ICampaign {
  campaign_id: string
  campaign_scene: CampaignScene
  campaign_name: string
  description: string
  start_time: number
  end_time: number
  status: CampaignStatus
  creator: string
  create_time: number
  campaign_tier: number
  entity_type: ''
  data_permission: number[]
  mechanic_label_info: string[]
  nomination_info: {
    approved: number
    rejected: number
    under_review: number
    withdraw: number
  }
  num_session: number
}

export interface GetCampaignDetailReq {
  campaign_id: string
}

export interface GetCampaignDetailRes {
  campaign: ICampaign
}

export interface PageInfo {
  limit: number
  offset: number
  total: number
  sort: {
    name: string
    order: 'desc' | 'asc'
  }
}

export interface GetCampaignListReq {
  page_info: Partial<PageInfo>
  filters?: Record<string, string | number>
}

export interface GetCampaignListRes {
  campaign_list: ICampaign[]
  page_info: PageInfo
}

export interface CreateCampaignReq {
  campaign: ICampaign
}

export interface CreateCampaignRes {
  campaign: ICampaign
}

export interface UpdateCampaignReq {
  campaign: ICampaign
}

export interface UpdateCampaignRes {
  campaign: ICampaign
}

export interface DeleteCampaignReq {
  campaign_id: string
}
