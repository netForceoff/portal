import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Fields } from './types'

import { ThunkConfig } from '@/app/providers/store'
import { User, userActions } from '@/entities/User'
import i18n from '@/shared/config/i18n'
import { USER_KEY } from '@/shared/const/localStorage'

export const login = createAsyncThunk<User, Fields, ThunkConfig<string>>(
  'login/login',
  async (data, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.axiosApi.post<User>('/login', data)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_KEY, JSON.stringify(response.data))
      dispatch(userActions.setUser(response.data))

      return response.data
    } catch (error) {
      console.error(error)

      return rejectWithValue(i18n.t('errors.simpleLoginForm'))
    }
  }
)
