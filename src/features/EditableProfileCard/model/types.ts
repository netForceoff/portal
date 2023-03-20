import { Currency } from 'entities/Currency'
import { Country } from 'shared/const/common'
import { ServerStatus } from 'shared/types/server'

export interface Profile {
  first: string
  lastname: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  error?: { title: string, text: string }
  profile?: Profile
  status: ServerStatus
  readonly: boolean
}
