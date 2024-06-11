// import loadable from '@loadable/component';
import {
  ExtensionLoader,
  CampaignSubDomain,
  InitCampaignPagePayload,
  ExtensionContext,
  IExtension,
  IExtensionCore,
} from '../types'

// not use now
export const checkRenderPage = (payload: InitCampaignPagePayload, currentPage: CampaignSubDomain): boolean => {
  const { campaignDomain, layoutType } = payload

  const suffixMap = {
    table: 'list',
    form: 'setting',
  }

  if (!campaignDomain || !layoutType) return false

  const checkingPage = `${campaignDomain}${suffixMap[layoutType]}`.toLowerCase()

  return checkingPage === currentPage
}

/**
 * patch page context for extensions
 */
export const performExtensions = (
  loader: ExtensionLoader,
  getExtensionCore: () => IExtensionCore,
  getExtensionContext: () => ExtensionContext
): ExtensionLoader => {
  // return transform(extensionsLoader, (obj: ExtensionLoader, loader, page: CampaignSubDomain) => {}
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

  return loaderPatcher
}
