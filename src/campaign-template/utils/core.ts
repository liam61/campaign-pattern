// import loadable from '@loadable/component';
import { transform } from 'lodash'

import {
  CampaignSceneExtensionsLoader,
  CampaignSubDomain,
  InitPagePayload,
  ExtensionContext,
  IExtension,
  IExtensionCore,
} from '../types'

export const checkRenderPage = (payload: InitPagePayload, currentPage: CampaignSubDomain): boolean => {
  const { campaignDomain, layoutType, disabled } = payload

  const suffixMap = {
    table: 'list',
    form: 'setting',
  }

  if (disabled || !campaignDomain || !layoutType) return false

  const checkingPage = `${campaignDomain}${suffixMap[layoutType]}`.toLowerCase()

  return checkingPage === currentPage
}

/**
 * patch page context for extensions
 */
export const performExtensions = (
  extensionsLoader: CampaignSceneExtensionsLoader,
  getExtensionCore: () => IExtensionCore,
  getExtensionContext: () => ExtensionContext
): CampaignSceneExtensionsLoader => {
  return transform(extensionsLoader, (obj: CampaignSceneExtensionsLoader, loader, page: CampaignSubDomain) => {
    // can only works after page called initPage
    const loaderPatcher = async (): Promise<IExtension[]> => {
      // if (page !== renderPage) return [];
      try {
        const extensions = (await loader()) || []

        return extensions.map((ex) => {
          return {
            ...ex,
            setup() {
              // inject current page context
              return ex?.setup(getExtensionCore(), getExtensionContext())
            },
            dispose() {
              return ex?.dispose?.(getExtensionCore(), getExtensionContext())
            },
          } as IExtension
        })
      } catch (err) {
        return []
      }
    }

    obj[page] = loaderPatcher
  })
}
