import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'

interface StateSchema {
  user: UserSchema
  login: LoginSchema
}

export {
  StateSchema
}
