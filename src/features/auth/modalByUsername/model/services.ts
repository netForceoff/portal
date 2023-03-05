import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import type { Fields } from './types'
import axios from 'axios'
import i18n from 'shared/config/i18n'
import { USER_KEY } from 'shared/const/localStorage'

const login = createAsyncThunk<User, Fields, { rejectValue: string }>(
  'login/login',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post<User>('http://localhost:2000/login', data)

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

export {
  login
}
