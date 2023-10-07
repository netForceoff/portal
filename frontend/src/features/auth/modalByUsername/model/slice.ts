import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {login} from './services';
import {initialAuthState} from './state';
import type {Fields} from './types';

export const loginSlice = createSlice({
	name: 'login',
	initialState: initialAuthState,
	reducers: {
		setField: (
			state,
			action: PayloadAction<{field: keyof Fields; value: string}>
		) => {
			const {
				payload: {field, value},
			} = action;
			state.fields[field] = value;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state, action) => {
				state.status = 'request';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'received';
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.payload;
			});
	},
});

export const {actions: loginActions, reducer: loginReducer} = loginSlice;
