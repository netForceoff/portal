import { StateSchema } from 'app/providers/store'
import { LoginSchema } from './types'

const getLoginState = (state: StateSchema): LoginSchema => state.login

export { getLoginState }
