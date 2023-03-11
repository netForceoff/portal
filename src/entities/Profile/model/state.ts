import { ProfileSchema } from './types'

export const initialProfileState: ProfileSchema = {
  readonly: true,
  error: '',
  status: 'received'
}
