import clsx from 'clsx';
import {FC, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {createSearchParams, useSearchParams} from 'react-router-dom';

import {useAppDispatch} from '@/app/providers/store';
import {
	getArticleListSearch,
	getArticleListOrder,
	getArticleListSortBy,
	SortBy,
	Order,
	articleListActions,
	filterArticles,
} from '@/entities/ArticleList';
import useDebounce from '@/shared/lib/hooks/useDebounce';
import {Input} from '@/shared/ui';
import {Select} from '@/shared/ui/Select';

export interface IArticlesPageFiltersProps {
	className?: string;
}
// TODO можно вытащить в отдельные компоненты
const optionsSort = [
	{
		value: 'title' as const,
		content: 'заголовку',
	},
	{
		value: 'views' as const,
		content: 'просмотрам',
	},
	{
		value: 'createdAt' as const,
		content: 'по дате создания',
	},
];

const optionsOrder = [
	{
		value: 'asc' as const,
		content: 'по возрастанию',
	},
	{
		value: 'desc' as const,
		content: 'по убыванию',
	},
];

const ArticlesPageFilters: FC<IArticlesPageFiltersProps> = (props) => {
	const {className} = props;
	const {t} = useTranslation('articles');
	const dispatch = useAppDispatch();
	const search = useSelector(getArticleListSearch);
	const sortBy = useSelector(getArticleListSortBy);
	const order = useSelector(getArticleListOrder);
	const [, setSearchParams] = useSearchParams();

	const filter = useCallback(() => {
		dispatch(filterArticles({type: 'full'}));
		setSearchParams(createSearchParams({search, sort: sortBy, order}));
	}, [dispatch, search, sortBy, order]);

	const handleChangeOptionSort = useCallback(
		(value: SortBy) => {
			dispatch(articleListActions.setPage(1));
			dispatch(articleListActions.setSort(value));
			filter();
		},
		[dispatch, filter]
	);

	const handleChangeOptionOrder = useCallback(
		(value: Order) => {
			dispatch(articleListActions.setPage(1));
			dispatch(articleListActions.setOrder(value));
			filter();
		},
		[dispatch, filter]
	);

	const debouncedFilter = useDebounce(filter);

	const handleSearch = useCallback(
		(value: string) => {
			dispatch(articleListActions.setSearch(value));
			debouncedFilter();
		},
		[dispatch, debouncedFilter]
	);

	return (
		<div className={clsx(className)}>
			<Select<SortBy>
				label={t('sortBy')}
				options={optionsSort}
				onChange={handleChangeOptionSort}
				value={sortBy}
			/>
			<Select
				label={t('sortBy')}
				options={optionsOrder}
				onChange={handleChangeOptionOrder}
				value={order}
			/>
			<Input
				placeholder={t('search')}
				onChange={handleSearch}
				value={search}
			/>
		</div>
	);
};

export default ArticlesPageFilters;
