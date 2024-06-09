import { DefaultBodyType, matchRequestUrl } from 'msw'
import { setupServer } from 'msw/node'

import { services } from './services'

// https://github.com/mswjs/examples/tree/main/examples/with-jest
export const mswServer = setupServer(...services)

export const spyOnRequest = (path: string): jest.Mock<unknown[], DefaultBodyType[]> => {
  const spyRequest = jest.fn<unknown[], DefaultBodyType[]>()

  mswServer.events.on('request:start', (request): void => {
    const matchesMethod = request.method.toLowerCase() === 'post'
    const matchesUrl = matchRequestUrl(request.url, path).matches

    if (matchesMethod && matchesUrl) {
      try {
        spyRequest(request.body)
      } catch (_) {
        spyRequest()
      }
    }
  })

  return spyRequest
}
