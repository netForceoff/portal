import type { StateSchema } from './schema'
import { initialAuthState } from 'features/auth/modalByUsername'
import { initialUserState } from 'entities/User'

const initialState: StateSchema = {
  counter: {
    value: 0
  },
  user: {
    ...initialUserState
  },
  login: {
    ...initialAuthState
  }
}

export {
  initialState
}
