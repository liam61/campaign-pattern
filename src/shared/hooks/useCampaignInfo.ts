import { useRequest } from 'ahooks'
import { Options as RequestOptions, Result as RequestResult } from 'ahooks/lib/useRequest/src/types'

import { CampaignFunctionConfig } from '../apis'
import { pageService } from '../services'
import { FECampaign } from '../types'

interface InitCampaignProps {
  /**
   * if not pass, will auto load from URL params
   */
  campaignId?: string
  functionConfig?: CampaignFunctionConfig | null
}

/**
 * get campaign info, useRequest style
 */
export const useCampaignInfo = (
  props: InitCampaignProps,
  options?: RequestOptions<FECampaign, [InitCampaignProps]>
): RequestResult<FECampaign | null, [InitCampaignProps]> => {
  const { campaignId: pCampaignId, ...restProps } = props

  const { routeParams } = useRoute<{ campaign_id: string }>()

  const campaignId = pCampaignId || routeParams?.campaignId

  return useRequest((userProps) => {
    // dynamic params
    const { campaignId: uCampaignId, ...restUserProps } = userProps

    return pageService.getCampaignDetail({
      campaign_id: uCampaignId || campaignId,
      ...restProps,
      ...restUserProps,
    } as any)
  }, options)
}
