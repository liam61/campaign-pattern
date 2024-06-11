import { FC } from 'react'

// import { CampaignTemplateProps } from '../types'

export class CampaignTemplateRenderer {
  renderToPage(Component: FC): FC {
    return () => <Component />
  }
}
