import { baseAPI } from '../baseApi'
import { RequestT, ResponseT } from '../type'
const authApi = baseAPI
  .enhanceEndpoints({
    addTagTypes: ['POSTS'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPosts: builder.query<ResponseT<any>, RequestT<any, any>>({
        query: (data) => ({
          url: '/posts',
          method: 'get',
        }),
      }),
    }),
  })
export const { useGetPostsQuery } = authApi
