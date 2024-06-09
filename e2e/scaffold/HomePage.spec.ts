import { expect } from '@playwright/test'

import { homePageTest } from './fixture'

homePageTest('scaffold test for home', async ({ page, homePage: _homePage }) => {
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible()

  await expect(page.getByText('Welcome to Campaign Template!')).toBeVisible()
})
