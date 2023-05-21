import { useDispatch } from 'react-redux'
import { AnyAction, CombinedState, ThunkDispatch } from '@reduxjs/toolkit'
import { AppDispatch, StateSchema, ThunkExtraArg } from './types'

const useAppDispatch = (): ThunkDispatch<CombinedState<StateSchema>, ThunkExtraArg, AnyAction> => useDispatch<AppDispatch>()

export default useAppDispatch
