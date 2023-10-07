import 'cross-fetch/polyfill';

import {screen} from '@testing-library/react';

import AppRouter from '../AppRouter';

import {getRouteAbout, getRouteArticles} from '@/shared/config/router';
import {componentRender} from '@/shared/lib/tests/componentRender';

describe('app/providers/router/ui/AppRouter', () => {
	it('отображает страницу "About"', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');

		expect(page).toBeInTheDocument();
	});

	it('отображает страницу "ArticlePage"', async () => {
		componentRender(<AppRouter />, {
			route: getRouteArticles('1'),
			initialState: {
				user: {
					user: {
						id: 'idStub',
						username: 'userStub',
					},
				},
			},
		});

		const page = await screen.findByTestId('ArticlePage');

		expect(page).toBeInTheDocument();
	});

	it('отображает страницу "NotFound"', async () => {
		componentRender(<AppRouter />, {
			route: '/123435',
		});

		const page = await screen.findByTestId('NotFoundPage');

		expect(page).toBeInTheDocument();
	});
});
