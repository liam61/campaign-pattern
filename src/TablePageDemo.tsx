import { ReactNode, useMemo } from 'react'

export function CampaignListPage(): ReactNode {
  const table = useMemo(() => createTable(), [])

  const handleBizLogic = () => {
    table.refresh()
  }

  const onRequest = async () => {
    // ...
    return [
      { label: 'free', value: 'FREE' },
      { label: 'paid', value: 'PAID' },
    ]
  }

  const onReaction = (column, table) => {
    const { record } = column

    column.setVisible(false)

    // table.refresh()
  }

  return (
    <TableContextProvider table={table}>
      <Header />

      <Table onRequest={() => {}} onInit={() => {}}>
        <Column dataIndex="campaign_id" />
        <Column dataIndex="charge_type" columnType="select" onRequest={onRequest} onReaction={[onReaction]} />
        <Column />

        <Action buttons={[]} />
      </Table>
    </TableContextProvider>
  )
}
