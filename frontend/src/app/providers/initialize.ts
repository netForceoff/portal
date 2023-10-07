import {AppDispatch, StateSchema} from './store/config/types';

import {userActions} from '@/entities/User';

const initialize =
	() => async (dispath: AppDispatch, getState: () => StateSchema) => {
		return await Promise.resolve(dispath(userActions.initUser()));
	};

export {initialize};
