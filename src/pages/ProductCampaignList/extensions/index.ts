import { ExtensionLoader } from '@ct'

export const extensionLoader: ExtensionLoader = () => import('./extensions')
