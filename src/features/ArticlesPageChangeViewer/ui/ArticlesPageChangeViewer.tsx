import {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import {useArticleListActions} from '@/entities/ArticleList';
import {Button} from '@/shared/ui';

export interface IArticlesPageChangeViewerProps {
	className?: string;
}
const ArticlesPageChangeViewer: FC<IArticlesPageChangeViewerProps> = (
	props
) => {
	const {t} = useTranslation('articles');
	const {setView} = useArticleListActions();

	const handleClickTable = useCallback(() => {
		setView('table');
	}, [setView]);

	const handleLickList = useCallback(() => {
		setView('list');
	}, [setView]);

	return (
		<>
			<Button onClick={handleClickTable}>{t('view.table')}</Button>
			<Button onClick={handleLickList}>{t('view.list')}</Button>
		</>
	);
};

export default memo(ArticlesPageChangeViewer);
