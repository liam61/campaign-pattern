// should keep this export
export {}

declare global {
  const __ENV__: 'test' | 'uat' | 'live'
  const __LOCALE__: 'sg' | 'cn'
  const __NODE_ENV__: 'development' | 'production'
  const __MOCK__: string

  interface Window {
    __ENV__: 'test' | 'uat' | 'live'
    __LOCALE__: 'sg' | 'cn'
    __NODE_ENV__: 'development' | 'production'
  }
}
