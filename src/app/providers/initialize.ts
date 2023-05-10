import { userActions } from '@/entities/User'
import { AppDispatch, StateSchema } from './store/config/types'

const initialize = () => async (dispath: AppDispatch, getState: () => StateSchema) => {
  return await Promise.resolve(dispath(userActions.initUser()))
}

export {
  initialize
}
