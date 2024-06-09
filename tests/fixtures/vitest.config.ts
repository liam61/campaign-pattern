import { join } from 'path'

import { UserConfig, configDefaults } from 'vitest/config'

export const vitestConfig: UserConfig['test'] = {
  // root: __dirname,
  globals: true,
  environment: 'jsdom',
  dangerouslyIgnoreUnhandledErrors: true,
  reporters: ['default', 'html', ['json', { outputFile: './vitest/test-results.json' }]],
  deps: {
    external: ['@formily'],
    // inline: ['client-zip'],
  },
  coverage: {
    reporter: ['text', 'json', 'html'],
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: [...(configDefaults.coverage.exclude || []), '**/apis/**'],
    reportsDirectory: './vitest/coverage',
  },
  outputFile: './vitest/report/report.html',
  setupFiles: [join(__dirname, 'vitest.setup.ts')],
  exclude: [...configDefaults.exclude, '**/e2e/**'],
  // redirect vitest to use esm instead of cjs due to incompatible of client-zip
  alias: [
    {
      find: /^mock\//,
      replacement: join(__dirname, '../../mock/'),
    },
  ],
}
