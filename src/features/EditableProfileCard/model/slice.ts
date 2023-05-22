import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getProfile, updateProfile } from './services'
import { initialProfileState } from './state'
import { Profile, ProfileSchema } from './types'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: <V extends Profile[keyof Profile]>(state: ProfileSchema, action: PayloadAction<{ key: keyof Profile, value: V }>) => {
      if (state.profile) {
        state.profile = {
          ...state.profile,
          [action.payload.key]: action.payload.value
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state, action) => {
        state.status = 'request'
        state.error = undefined
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.status = 'received'
        state.profile = action.payload
      })
      .addCase(getProfile.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.status = 'request'
        state.error = undefined
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.status = 'received'
        state.profile = action.payload
      })
      .addCase(updateProfile.rejected, (state, action: PayloadAction<{ title: string, text: string } | undefined>) => {
        state.status = 'error'
        state.error = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
