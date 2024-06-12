# Campaign Template Learn

## 封装与预制

原则：

1. 唯业务可变

2. 预制，封装业务无关

3. 内核用插件拓展

## 灵感

要求

1. 使用 JSX 书写

2. 完全支持 antdProps

3. 支持自定义，能够拿到上下文

```ts
const { Header, Table, Column, Action } = ListPageTemplate

export function CampaignListPage(): ReactNode {
  return (
    <ListPageTemplate>
      <Header />

      <Table>
        <Column {...antdProps} {...customProps} />
        <Column />
        <Column />

        <Action />
        <Action />
      </Table>
    </ListPageTemplate>
  )
}

```

## Table 封装

```ts
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

```

## Form 封装

```ts
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
```

## Button 封装

```ts
<Button buttonType='drawer-filter' filters={[]} />
<Button buttonType='column-toggle' toggles={[]} />
<Button buttonType='form-modal' fields={[]} />
<Button buttonType='page-nav' pageType='' onBeforeNav={} />
<Button buttonType='download-csv' downloadUrl='' />
<Button buttonType='upload-csv' />
<Button buttonType='edit-csv' />
```

## 业务插件

```ts
const useTableColumnTogglePlugin = (table) => {
  const tableProps = table.getTableProps()

  // ...
}

function Table(props) {

  useTableColumnTogglePlugin(table)

  return <AntdTable {...props} />
}


const useFormTabGroupPlugin = (form) => {
  const formProps = form.getFormProps()

  // ...
}

function Form(props) {

  useFormTabGroupPlugin(table)

  return <FormilyForm {...props} />
}
```

## 编排

```ts
function CampaignScene() {

  return <></>
}

// with 确定的业务点
assign(CampaignScene, {
  CampaignListPage: (userProps) => <CampaignListPage {...props} {...userProps} />,
  CampaignDetailPage: (userProps) => <CampaignDetailPage {...props} {...userProps} />,
  // ...
})

```

## 实现步骤

1. 底层工具 + tests => 底层稳定

2. 封装、预制 => 定义规范

3. 组装、编排 => 终极提效
