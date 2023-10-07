import './styles/index.scss';
import {useLayoutEffect} from 'react';

import AppRouter from './providers/router';

import {useTheme} from '@/entities/theme';
import {Navbar} from '@/widgets/Navbar';
import {Sidebar} from '@/widgets/Sidebar';

export const App = (): JSX.Element => {
	const {theme} = useTheme();

	useLayoutEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<>
			<Navbar />
			<div className="content">
				<Sidebar />
				<AppRouter />
			</div>
		</>
	);
};

export default App;
