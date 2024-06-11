import { ReactNode, useMemo } from 'react'

export function CampaignDetailPage(): ReactNode {
  const form = useMemo(() => createForm(), [])

  const handleBizLogic = () => {
    form.submit()
  }

  const onRequest = async () => {
    // ...
    return [
      { label: 'free', value: 'FREE' },
      { label: 'paid', value: 'PAID' },
    ]
  }

  const onReaction = (field: FormilyField, form: FormilyForm) => {
    field.setVisible(false)
  }

  return (
    <Form form={form} onInit={() => {}} onRequest={() => {}} requestId="123OrNull">
      <Header />

      <Field name="campaign_id" />
      <Field name="charge_type" fieldType="select" onRequest={onRequest} onReaction={[onReaction]} />
      <Field />

      <Footer buttons={[]} />
    </Form>
  )
}
