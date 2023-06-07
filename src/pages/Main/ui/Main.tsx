import {useTranslation} from 'react-i18next';

import {Rating} from '@/entities/Rating';
import {Layout} from '@/widgets/Layout';

const stars = [1, 2, 3, 4, 5];

const Main = (): JSX.Element => {
	const {t} = useTranslation('main');

	return (
		<Layout>
			{/* ДИЧЬ */}
			{() => (
				<>
					<div data-testid="MainPage" />
					{t('page.main')}
					<Rating
						title="Как вам статья"
						feedbackTitle="Оставьте отзыв о статье"
						rates={stars}
					/>
				</>
			)}
		</Layout>
	);
};

export default Main;
