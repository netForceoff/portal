import {EditableProfileCard} from '../../src/features/EditableProfileCard';
import {Wrapper} from '../../src/shared/lib/tests/wrapper';

describe('ProfilePage.cy.tsx', () => {
	it('playground', () => {
		cy.intercept('GET', '**/profiles/*', {fixture: 'profile.json'});

		cy.mount(
			<Wrapper>
				<EditableProfileCard id="1" />
			</Wrapper>
		);
	});
});
