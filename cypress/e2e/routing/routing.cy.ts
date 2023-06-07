import {selectByTestId} from '../helpers/xpath';

describe('Роутинг', () => {
	it('позволяет перейти на главную страницу', () => {
		cy.visit('/');
		// по хорошему надо проверить только url. Да вообще такие тесты не нужны как будто, unit хватит
		cy.get(selectByTestId('MainPage')).should('exist');
	});

	it('перебрасывает на страницу с ошибку при неверном url', () => {
		cy.visit('/blablabla');
		cy.get(selectByTestId('NotFoundPage')).should('exist');
	});

	it('перебрасывает на страницу статей БЗ', () => {
		cy.login('admin', '123');
		cy.visit('/articles/1');
		cy.get(selectByTestId('ArticlePage')).should('exist');
	});
});
