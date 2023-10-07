import {
	configureStore,
	AnyAction,
	Middleware,
	DeepPartial,
	Dispatch,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

import {createReducerManager} from './manager';
import {AsyncStateSchema, StateSchema} from './types';

import {userReducer} from '@/entities/User';
import {axiosApi} from '@/shared/api/axios';
import {rtkApi} from '@/shared/api/query';

const createStore = (
	initialState?: DeepPartial<StateSchema>,
	asyncReducers?: ReducersMapObject<AsyncStateSchema>
): ToolkitStore<
	StateSchema,
	AnyAction,
	ReadonlyArray<Middleware<string, StateSchema, Dispatch<AnyAction>>>
> => {
	const reducer = {
		...(asyncReducers && {...asyncReducers}),
		user: userReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(reducer);

	const store = configureStore<
		StateSchema,
		AnyAction,
		ReadonlyArray<Middleware<string, StateSchema>>
	>({
		devTools: __IS_DEV__,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		reducer: reducerManager.reduce,
		preloadedState: initialState as StateSchema,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						axiosApi,
					},
				},
			}).concat(rtkApi.middleware),
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};

export default createStore;
