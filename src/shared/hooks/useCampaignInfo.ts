import { useSearchParams } from 'react-router-dom'

import { CampaignFunctionConfig } from '@apis'
import { useRequest } from 'ahooks'
import { Options as RequestOptions, Result as RequestResult } from 'ahooks/lib/useRequest/src/types'

import { campaignService } from '../services'
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

  const [searchParams] = useSearchParams()

  const campaignId = pCampaignId || searchParams.get('campaignId') || ''

  return useRequest((userProps) => {
    // dynamic params
    const { campaignId: uCampaignId, ...restUserProps } = userProps

    return campaignService.getCampaignDetail({
      campaign_id: uCampaignId || campaignId,
      ...restProps,
      ...restUserProps,
    })
  }, options)
}
