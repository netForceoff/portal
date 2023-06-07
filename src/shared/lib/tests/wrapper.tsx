import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {FC, ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router-dom';

import i18nForTests from '../../config/i18n/tests';

import {StateSchema, StoreProvider} from '@/app/providers/store';

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export interface IProps {
	children: ReactNode;
	options?: componentRenderOptions;
}

export const Wrapper: FC<IProps> = ({
	children,
	options = {
		asyncReducers: {},
	},
}) => {
	const {route = '/', initialState, asyncReducers} = options;

	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider
				asyncReducers={asyncReducers}
				initialState={initialState}
			>
				<I18nextProvider i18n={i18nForTests}>
					{children}
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
};
