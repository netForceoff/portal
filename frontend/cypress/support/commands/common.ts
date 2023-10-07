import {User} from '../../../src/entities/User/model/types';
import {USER_KEY} from '../../../src/shared/const/localStorage';
import {selectByTestId} from '../../e2e/helpers/xpath';

const login = (username: string, password: string) => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:2000/login',
			body: {
				username,
				password,
			},
		})
		.then(({body}) => {
			window.localStorage.setItem(USER_KEY, JSON.stringify(body));

			return body;
		});
};

const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
	namespace Cypress {
		interface Chainable {
			login(username: string, password: string): Chainable<User>;
			getByTestId<Element = HTMLElement>(
				testId: string
			): Chainable<JQuery<Element>>;
		}
	}
}

export {getByTestId, login};
