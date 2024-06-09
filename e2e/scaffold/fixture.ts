import { Page, test as base } from '@playwright/test'

class ScaffoldPage {
  public readonly logs: string[] = []

  constructor(public readonly page: Page) {
    this.page = page
  }

  /** Create page init steps. Init before test */
  async pageInitSteps(): Promise<void> {
    await this.page.goto('/')
    await this.page.waitForTimeout(1000)
  }
}

/** Extend basic Playwright test by providing a "ScaffoldPage" fixture. */
export const homePageTest = base.extend<{ homePage: ScaffoldPage }>({
  homePage: async ({ page }, use) => {
    const homePage = new ScaffoldPage(page)

    await homePage.pageInitSteps()
    await use(homePage)
  },
})
