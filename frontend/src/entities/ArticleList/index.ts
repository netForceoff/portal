import {
	getArticleListStatus,
	getArticleListError,
	getArticleListPage,
	getArticleListView,
	getArticleListSortBy,
	getArticleListOrder,
	getArticleListSearch,
} from './model/selectors';
import {getArticlesMore, initArticles} from './model/service';
import {filterArticles} from './model/service/filter';
import {
	articleListActions,
	articleListReducer,
	getArticleList,
	useArticleListActions,
} from './model/slice';
import type {ArticleListSchema, IArticle, Order, SortBy} from './model/types';
import ArticleListCompact from './ui/ArticleListCompact/ArticleListCompact';
import ArticleListExtended from './ui/ArticleListExtended/ArticleListExtended';

export {ArticleListSchema, IArticle, SortBy, Order};

export {
	getArticleList,
	getArticleListSortBy,
	getArticleListOrder,
	getArticleListSearch,
	getArticleListStatus,
	getArticleListError,
	getArticleListPage,
	getArticleListView,
};

export {filterArticles, getArticlesMore, initArticles};

export {articleListActions, articleListReducer, useArticleListActions};

export {ArticleListCompact, ArticleListExtended};
