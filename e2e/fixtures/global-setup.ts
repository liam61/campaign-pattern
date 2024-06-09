import { FullConfig, chromium } from '@playwright/test'

async function globalSetup(config: FullConfig<{}>): Promise<void> {
  const { storageState } = config.projects[0].use

  const browser = await chromium.launch()
  const browserCtx = await browser.newContext()

  // calling dev-lib setup for SOUP authorization
  // await globalSetup(browserCtx, config)

  await browserCtx.storageState({ path: storageState as string })
  await browserCtx.close()
}

export default globalSetup
