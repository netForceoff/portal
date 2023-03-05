import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User, UserSchema } from './types'
import { USER_KEY } from 'shared/const/localStorage'

export const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_KEY)

      if (user) {
        state.user = JSON.parse(user)
      }
    },
    removeUser: (state) => {
      localStorage.removeItem(USER_KEY)

      state.user = undefined
    }
  }
})

export const { actions: userActions, reducer: userReducer } = userSlice
