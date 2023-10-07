import {FC, lazy} from 'react';

import type {IProps} from './LoginForm';

import {withSuspense} from '@/shared/lib';

const LoginForm = lazy<FC<IProps>>(async () => await import('./LoginForm'));

export default withSuspense(LoginForm);
