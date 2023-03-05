import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from './services'
import type { Fields, LoginSchema } from './types'

export const initialState: LoginSchema = {
  error: '',
  fields: {
    username: '',
    password: ''
  },
  status: 'received'

}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: keyof Fields, value: string }>) => {
      const { payload: { field, value } } = action
      state.fields[field] = value
    },
    clear: (state) => {
      state.error = ''
      state.fields = {
        username: '',
        password: ''
      }
      state.status = 'received'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'request'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'received'
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
