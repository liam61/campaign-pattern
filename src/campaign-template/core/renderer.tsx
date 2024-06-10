/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC } from 'react'

import { CampaignTemplateComponentProps, CampaignTemplateRoutePages } from '../types'

export class CampaignTemplateRenderer {
  renderToRoutePages(
    CampaignTemplateComponent: FC<Omit<CampaignTemplateComponentProps, 'sdk'>>
  ): CampaignTemplateRoutePages {
    const campaignList = () => <CampaignTemplateComponent renderPage="campaignList" />
    const campaignDetail = () => <CampaignTemplateComponent renderPage="campaignDetail" />
    // const sessionList = () => <CampaignSceneComponent renderSubDomain="sessionList" />;

    return {
      campaignList,
      campaignDetail,
      sessionList: null,
      sessionDetail: null,
    }
  }
}
