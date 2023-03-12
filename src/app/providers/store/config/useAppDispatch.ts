import { StateSchema } from 'app/providers/store'
import createStore from './store'
import { useDispatch } from 'react-redux'
import { AnyAction, CombinedState, ThunkDispatch } from '@reduxjs/toolkit'

type AppDispatch = ReturnType<typeof createStore>['dispatch']

const useAppDispatch = (): ThunkDispatch<CombinedState<StateSchema>, null, AnyAction> => useDispatch<AppDispatch>()

export default useAppDispatch
