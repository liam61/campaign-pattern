import { useRequest } from 'ahooks'
import { isBoolean, isNil, isString } from 'lodash'

interface PermissionItem {
  code?: string | boolean
}

type BEPermissionMap = Partial<Record<typeof __LOCALE__, string[]>>

const fakePermissionMap: BEPermissionMap = {
  sg: ['CreateCampaign', 'EditCampaign'],
  cn: ['ViewCampaign'],
}

export const useDemoPermission = (item: PermissionItem): { loading: boolean; hasPerm: boolean } => {
  const { code } = item

  const { loading, data } = useRequest<BEPermissionMap | null, void[]>(
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))

      return fakePermissionMap
    },
    {
      ready: isString(code), // when pass string, will load api
    }
  )

  if (isNil(code) || isBoolean(code)) {
    return {
      loading: false,
      hasPerm: !!code,
    }
  }

  return {
    loading,
    hasPerm: !!data?.[__LOCALE__]?.includes(code),
  }
}
