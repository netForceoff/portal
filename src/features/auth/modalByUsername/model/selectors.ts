import { StateSchema } from '@/app/providers/store'
import { ServerStatus } from '@/shared/types/server'

const getLoginUsername = (state: StateSchema): string => state.login?.fields.username || ''

const getLoginPassword = (state: StateSchema): string => state.login?.fields.password || ''

const getLoginError = (state: StateSchema): string => state.login?.error || ''

const getLoginStatus = (state: StateSchema): ServerStatus => state.login?.status || 'received'

export { getLoginStatus, getLoginError, getLoginPassword, getLoginUsername }
