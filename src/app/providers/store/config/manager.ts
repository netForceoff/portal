import {
	combineReducers,
	Reducer,
	ReducersMapObject,
	AnyAction,
} from '@reduxjs/toolkit';

import type {StateSchema, Manager} from './types';

export const createReducerManager = (
	initialReducers: ReducersMapObject<StateSchema>
): Manager => {
	const reducers = {...initialReducers};

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: Array<keyof StateSchema> = [];

	return {
		getReducerMap: () => reducers,

		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = {...state};
				for (const key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: keyof StateSchema, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}

			reducers[key] = reducer;

			combinedReducer = combineReducers(reducers);
		},

		remove: (key: keyof StateSchema) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];

			keysToRemove.push(key);

			combinedReducer = combineReducers(reducers);
		},
	};
};
