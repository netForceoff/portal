import { initialState as initialUserState, userActions, userReducer } from './model/slice'
import type { User, UserSchema } from './model/types'
import { getUser } from './model/selectors'

export {
  userActions,
  userReducer,
  User,
  UserSchema,
  initialUserState,
  getUser
}
