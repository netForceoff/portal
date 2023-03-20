import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n'
import { ThunkConfig } from 'app/providers/store'
import { Profile } from './types'
import { getProfileState } from './selectors'

export const getProfile = createAsyncThunk<Profile, undefined, ThunkConfig<{ title: string, text: string }>>(
  'profile/getProfile',
  async (_, { extra, dispatch, rejectWithValue }) => {
    try {
      const response = await extra.axiosApi.get<Profile>('/profile')

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: i18n.t('error.profile.title', { ns: 'profile' }),
        text: i18n.t('error.profile.text', { ns: 'profile' })
      })
    }
  }
)

export const updateProfile = createAsyncThunk<Profile, undefined, ThunkConfig<{ title: string, text: string }>>(
  'profile/updateProfile',
  async (_, { extra, dispatch, rejectWithValue, getState }) => {
    try {
      const profile = getProfileState(getState())
      const response = await extra.axiosApi.put<Profile>('/profile', profile)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      console.error(error)

      return rejectWithValue({
        title: i18n.t('error.profile.title', { ns: 'profile' }),
        text: i18n.t('error.profile.text', { ns: 'profile' })
      })
    }
  }
)
