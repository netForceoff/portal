import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProfileState } from './selectors'
import { Profile } from './types'

import { ThunkConfig } from '@/app/providers/store'
import i18n from '@/shared/config/i18n'

export const getProfile = createAsyncThunk<Profile, string | undefined, ThunkConfig<{ title: string, text: string }>>(
  'profile/getProfile',
  async (uuid, { extra, dispatch, rejectWithValue }) => {
    try {
      if (uuid) {
        const response = await extra.axiosApi.get<Profile>('/profiles/' + uuid)

        if (!response.data) {
          throw new Error()
        }

        return response.data
      }

      throw new Error('Nothing found')
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
