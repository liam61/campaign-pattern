/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path'

import { isString } from 'lodash'
import { RequestHandler, rest } from 'msw'

export const createEndPoint = (path: string, response: Record<string, unknown>): RequestHandler => {
  return rest.post(path, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(response))
  })
}

// const imageHashHandler = rest.get('https://api/file/*', async (req, res, ctx) => {
//   const fakeImage = new ArrayBuffer(100);
//   return res(
//     ctx.status(200),
//     ctx.set('Content-Length', fakeImage.byteLength.toString()),
//     ctx.set('Content-Type', 'image/jpeg'),
//     ctx.body(fakeImage)
//   );
// });

const loadContentByFolderPath = (path: string): Record<string, unknown> => {
  if (!isString(path)) return {}

  const content = require(join(__dirname, `${path}.ts`))

  return content
}

export const GetCampaignListPath = '/api/v1/campaign/get_campaign_list'
const getCampaignListService = (): RequestHandler => {
  return createEndPoint(GetCampaignListPath, loadContentByFolderPath(GetCampaignListPath))
}

export const services = [getCampaignListService()]
