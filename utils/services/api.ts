import { ENV } from '../constant'

export const api = ({
  config,
  token,
  endpoint,
  params,
}: {
  config?: RequestInit
  token?: string | undefined
  endpoint: string
  params?: any
}) =>
  fetch(
    `
  ${ENV.NEXT_PUBLIC_API_URL}${endpoint}${params ? `?${new URLSearchParams(params)}` : ''}`,
    {
      headers: {
        ...(token && { Authorization: `${token}` }),
        'Content-Type': 'application/json',
      },
      next: { revalidate: 10 },
      method: 'GET',
      ...(config || {}),
    },
  )
