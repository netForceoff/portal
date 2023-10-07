import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {initialUserState} from './state';
import type {User} from './types';

import {USER_KEY} from '@/shared/const/localStorage';
import {setFeatureFlags} from '@/shared/lib/features';

export const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		initUser: (state) => {
			const user = localStorage.getItem(USER_KEY);

			if (user) {
				const data = JSON.parse(user) as User;
				state.user = data;
				setFeatureFlags(data.features);
			}
		},
		removeUser: (state) => {
			localStorage.removeItem(USER_KEY);

			state.user = undefined;
		},
	},
});

export const {actions: userActions, reducer: userReducer} = userSlice;
