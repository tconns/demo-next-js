import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { Mutex } from 'async-mutex'
import { ENV, KEYS } from '@/utils/constant'

const mutex = new Mutex()
export const baseQuery = fetchBaseQuery({
  baseUrl: ENV.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    const token = Cookies.get(KEYS.ACCESS_TOKEN)
    if (token) {
      headers.set('authorization', `${token}`)
    }
    return headers
  },
})
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error && result?.error?.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshToken = Cookies.get(KEYS.REFRESH_TOKEN)
        const refreshResult: any = await baseQuery(
          {
            url: '/auth/refresh-token',
            body: {
              token: refreshToken,
            },
          },
          api,
          extraOptions,
        )
        if (refreshResult.data) {
          setInterval(() => {
            Cookies.set(KEYS.ACCESS_TOKEN, refreshResult.data?.accessToken || '')
            Cookies.set(KEYS.REFRESH_TOKEN, refreshResult.data?.refreshToken || '')
          }, 500)
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        }
      } catch (error) {
        Cookies.remove(KEYS.ACCESS_TOKEN)
        Cookies.remove(KEYS.REFRESH_TOKEN)
        localStorage.clear()
        window?.location?.reload()
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
export const baseAPI = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'api',
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
})
