export type ServerStatus = 'request' | 'received' | 'error'

export interface ServerError {
  title: string
  text: string
}
