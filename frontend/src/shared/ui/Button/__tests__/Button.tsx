import {render, screen, waitFor} from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
	it('render Button', async () => {
		render(<Button>Test</Button>);

		waitFor(() => {
			expect(screen.getAllByText('Test')).toBeInTheDocument();
		});
	});
});
