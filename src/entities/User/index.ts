import { initialState as initialUserState, userActions, userReducer } from './model/slice'
import type { User, UserSchema } from './model/types'

export {
  userActions,
  userReducer,
  User,
  UserSchema,
  initialUserState
}
