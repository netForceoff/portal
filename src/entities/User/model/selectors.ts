import { StateSchema } from 'app/providers/store'
import type { User } from '../model/types'

export const getUser = (state: StateSchema): User | undefined => state.user.user
