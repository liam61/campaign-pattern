import { isPlainObject } from 'lodash'
import qs from 'qs'

/**
 * concat query object for url
 */
export const concatUrlQueries = (url: string, queries?: Record<string, string | number | boolean>): string => {
  if (!isPlainObject(queries) || !Object.keys(queries || {}).length) return url

  const q: string = qs.stringify(queries, { arrayFormat: 'comma' })
  return `${url}${url.includes('?') ? '&' : '?'}${q}`
}
