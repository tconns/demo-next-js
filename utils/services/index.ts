import { api } from './api'

export async function getExample() {
  const res = await api({
    endpoint: '/posts',
  })
  return res.json().then((data) => data)
}
