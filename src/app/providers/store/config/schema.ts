import { CounterSchema } from 'entities/Counter'
import { LoginSchema } from 'features/auth/modalByUsername'
import { UserSchema } from 'entities/User'

interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login: LoginSchema
}

export {
  StateSchema
}
