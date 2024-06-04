export type RequestT<T, P> = {
  body?: T
  params?: P
}
export type ResponseT<T> = {
  data: T
}
