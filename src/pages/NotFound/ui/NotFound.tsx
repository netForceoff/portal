import {useTranslation} from 'react-i18next';

import {Layout} from '@/widgets/Layout';

export const NotFound = (): JSX.Element => {
	const {t} = useTranslation();

	return (
		<Layout>
			{() => <div data-testid="NotFoundPage">{t('page.notFound')}</div>}
		</Layout>
	);
};

export default NotFound;
