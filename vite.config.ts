import { join } from 'path'

import { defineConfig } from 'vite'

import dotenv from 'dotenv'
import { reactClickToComponent } from 'vite-plugin-react-click-to-component'
import dynamicImport from 'vite-plugin-dynamic-import'
import react from '@vitejs/plugin-react-swc'

import vitestConfig from './tests/fixtures/vitest.config'

const NODE_ENV = process.env.NODE_ENV || 'development'
const isLocalBuild = process.env.RUNNING_CONTEXT !== 'docker'

const isDev = NODE_ENV === 'development'

if (isDev || isLocalBuild) {
  // could reset env here
  dotenv.config({ override: true })
}

const ENV = process.env.ENV || 'test'
const LOCALE = process.env.CID || 'sg'

const proxyPath = '/api'
const proxyTarget = `https://a-test.com`

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    __ENV__: JSON.stringify(ENV),
    __LOCALE__: JSON.stringify(LOCALE),
  },
  // optimizeDeps: {},
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '~antd': join(__dirname, 'node_modules/antd'),
      '@shared': join(__dirname, 'src/_shared'),
    },
    // alias: [
    //   { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    // ],
  },
  server: {
    // port: 8080,
    open: true,
    host: '0.0.0.0',
    proxy: {
      [proxyPath]: proxyTarget,
    },
  },
  preview: {
    port: 8080,
  },
  test: vitestConfig,
  plugins: [react(), dynamicImport(), reactClickToComponent()],
})
