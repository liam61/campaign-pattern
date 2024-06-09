import { FullConfig } from '@playwright/test'

const globalTeardown = async (config: FullConfig): Promise<void> => {
  const { baseURL, storageState } = config.projects[0].use

  console.log(baseURL)
  console.log(storageState)
}

export default globalTeardown
