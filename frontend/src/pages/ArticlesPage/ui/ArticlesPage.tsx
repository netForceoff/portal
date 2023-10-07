import {FC, useEffect, useCallback, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

// import styles from './ArticlesPage.module.scss'
import {useAppDispatch} from '@/app/providers/store';
import {
	articleListReducer,
	getArticleListError,
	getArticlesMore,
	initArticles,
} from '@/entities/ArticleList';
import {Error} from '@/entities/Error';
import {ArticlesPageChangeViewer} from '@/features/ArticlesPageChangeViewer';
import {ArticlesPageFilters} from '@/features/ArticlesPageFilters';
import {SaveScrollPosition} from '@/features/SaveScrollPosition';
import {withReducers} from '@/shared/lib';
import InfinityScrollWrapper from '@/shared/lib/wrappers/InfinityScrollWrapper';
import {ArticleCards} from '@/widgets/ArticleCards';
import {Layout} from '@/widgets/Layout';

const reducers = {
	articles: articleListReducer,
};

export interface IArticlesPageProps extends JSX.IntrinsicAttributes {
	className?: string;
}

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
	const dispatch = useAppDispatch();
	const error = useSelector(getArticleListError);
	const triggerRef = useRef<HTMLDivElement>(null);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		dispatch(initArticles(searchParams));
	}, [dispatch]);

	const handleUpdate = useCallback(() => {
		dispatch(getArticlesMore());
	}, [dispatch]);

	if (error) {
		return <Error title={error.title} text={error.text} />;
	}

	return (
		<Layout>
			{(ref) => {
				return (
					<>
						<SaveScrollPosition containerRef={ref}>
							<InfinityScrollWrapper
								wrapperRef={ref}
								triggerRef={triggerRef}
								callback={handleUpdate}
							>
								<ArticlesPageFilters />
								<ArticlesPageChangeViewer />
								<ArticleCards />
							</InfinityScrollWrapper>
							<div ref={triggerRef} />
						</SaveScrollPosition>
					</>
				);
			}}
		</Layout>
	);
};

export default withReducers(ArticlesPage, reducers, false);
