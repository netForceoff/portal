import type {User} from '../model/types';

import {StateSchema} from '@/app/providers/store';

export const getUser = (state: StateSchema): User | undefined =>
	state.user.user;
