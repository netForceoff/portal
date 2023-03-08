import { StateSchema } from 'app/providers/store'
import { RequestStatus } from './types'

const getLoginUsername = (state: StateSchema): string => state.login?.fields.username || ''

const getLoginPassword = (state: StateSchema): string => state.login?.fields.password || ''

const getLoginError = (state: StateSchema): string => state.login?.error || ''

const getLoginStatus = (state: StateSchema): RequestStatus => state.login?.status || 'received'

export { getLoginStatus, getLoginError, getLoginPassword, getLoginUsername }
