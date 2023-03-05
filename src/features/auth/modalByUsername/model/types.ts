
export type RequestStatus = 'request' | 'received' | 'error'

export interface Fields {
  username: string
  password: string
}

export interface LoginSchema {
  error?: string
  fields: Fields
  status: RequestStatus
}
