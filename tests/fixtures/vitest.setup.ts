/* eslint-disable no-global-assign */
import '@testing-library/jest-dom'
import { vi } from 'vitest'

import { mswServer } from '../../mocks'
// import { initGlobalEnvs } from '../initEnvs'

// vitest utils from: https://vitest.dev/api/vi.html

process.env.__UNIT_TEST__ = 'true'

// initGlobalEnvs()

// https://stackoverflow.com/a/54021633/12600517
window = Object.create(window)

// https://github.com/mswjs/examples/tree/main/examples/with-vitest
beforeAll(() => {
  const { getComputedStyle } = window
  window.getComputedStyle = (el): CSSStyleDeclaration => getComputedStyle(el)
})

beforeEach(() => {
  mswServer.listen()

  vi.clearAllMocks()
})

afterEach(() => mswServer.resetHandlers())

afterAll(() => mswServer.close())

class LocalStorageMock {
  store: Record<string, unknown>

  constructor() {
    this.store = {}
  }

  clear(): void {
    this.store = {}
  }

  getItem(key: string): unknown {
    return this.store[key] || null
  }

  setItem(key: string, value: unknown): void {
    this.store[key] = String(value)
  }

  removeItem(key: string): void {
    delete this.store[key]
  }
}

const mockLocalStorage = new LocalStorageMock()

Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: mockLocalStorage,
})

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
})

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

Object.defineProperty(window, 'location', {
  writable: true, // possibility to override
  value: {
    href: 'https://ct-unit-test.com',
    pathname: '/',
    search: '',
    assign: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
  },
})

Object.defineProperty(window, 'history', {
  writable: true,
  value: {
    state: {},
    go: vi.fn(),
    back: vi.fn(),
    pushState: vi.fn(),
    replaceState: vi.fn(),
  },
})

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(),
})

Object.defineProperty(URL, 'revokeObjectURL', {
  writable: true,
  value: vi.fn(),
})
