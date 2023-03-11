import { createSlice } from '@reduxjs/toolkit'
import { initialProfileState } from './state'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
