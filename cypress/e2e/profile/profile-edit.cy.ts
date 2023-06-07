let profileId = '';

describe('Profile page', () => {
	beforeEach(() => {
		cy.login('admin', '123').then((user) => {
			profileId = user.id;
			cy.visit('/profile/' + user.id);
		});
	});
	it('can edit user data', () => {
		cy.intercept('GET', '**/profiles/*', {fixture: 'profile.json'});
		cy.updateProfile();

		cy.getByTestId<HTMLInputElement>('ProfileCard__firstName_Input').should(
			'have.value',
			'newName'
		);
		cy.getByTestId<HTMLInputElement>('ProfileCard__lastName_Input').should(
			'have.value',
			'newLastName'
		);
	});

	afterEach(async () => {
		await cy.resetProfile(profileId);
	});
});
