import { StateSchema } from 'app/providers/store'
import { useDispatch } from 'react-redux'
import { AnyAction, CombinedState, ThunkDispatch } from '@reduxjs/toolkit'
import { AppDispatch, ThunkExtraArg } from './types'

const useAppDispatch = (): ThunkDispatch<CombinedState<StateSchema>, ThunkExtraArg, AnyAction> => useDispatch<AppDispatch>()

export default useAppDispatch
