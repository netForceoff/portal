import type {LoginSchema} from './types';

export const initialAuthState: LoginSchema = {
	error: '',
	fields: {
		username: '',
		password: '',
	},
	status: 'received',
};
