import { ReactNode } from 'react'

import { IExtension } from '@ct'

export const CampaignIdColumn: IExtension = {
  name: 'campaign_id',
  setup(core): void {
    core.provideColumn({
      // name: '',
      content: {
        dataIndex: 'campaign_id',
        title: 'Campaign ID',
        render(value): ReactNode {
          return <span>{value || '-'}</span>
        },
      },
    })
  },
}
