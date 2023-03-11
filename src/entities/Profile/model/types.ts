import { Country, Currency } from 'shared/const/common'
import { ServerStatus } from 'shared/types/server'

export interface Profile {
  first: string
  lastname: string
  age: 22
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  error?: string
  profile?: Profile
  status: ServerStatus
  readonly: boolean
}
