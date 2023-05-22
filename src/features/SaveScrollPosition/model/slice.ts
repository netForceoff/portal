import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialSaveScrollPositionState } from './state'
import { SaveScrollPositionSchema } from './types'

export const saveScrollPositionSlice = createSlice({
  name: 'saveScrollPosition',
  initialState: initialSaveScrollPositionState,
  reducers: {
    setScrollPosition: (state: SaveScrollPositionSchema, action: PayloadAction<{ path: string, position: number }>) => {
      state[action.payload.path] = action.payload.position
    }
  }
})
export const { actions: saveScrollPositionActions, reducer: saveScrollPositionReducer } = saveScrollPositionSlice
