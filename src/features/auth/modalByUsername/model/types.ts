import { ServerStatus } from 'shared/types/server'

export interface Fields {
  username: string
  password: string
}

export interface LoginSchema {
  error?: string
  fields: Fields
  status: ServerStatus
}
