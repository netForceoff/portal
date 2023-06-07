import {createEntityAdapter, PayloadAction} from '@reduxjs/toolkit';

import {filterArticles} from './service/filter';
import {ArticleListSchema, IArticle, Order, SortBy} from './types';

import {buildSlice, StateSchema} from '@/app/providers/store';

const articleListAdapter = createEntityAdapter<IArticle>({
	selectId: (article) => article.id,
});

const articleListSlice = buildSlice({
	name: 'articleListSlice',
	initialState: articleListAdapter.getInitialState<ArticleListSchema>({
		status: 'received',
		ids: [],
		entities: {},
		view: 'table',
		page: 1,
		hasMore: true,
		limit: 2,
		search: '',
		order: 'desc',
		sort: 'title',
	}),
	reducers: {
		setOrder: (state, action: PayloadAction<Order>) => {
			state.order = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setSort: (state, action: PayloadAction<SortBy>) => {
			state.sort = action.payload;
		},
		setView: (state, action: PayloadAction<'table' | 'list'>) => {
			state.view = action.payload;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setArticles: (state, action: PayloadAction<IArticle[]>) => {
			articleListAdapter.setAll(state, action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				filterArticles.pending,
				(state: ArticleListSchema, action) => {
					state.status = 'request';

					if (action.meta.arg.type === 'full') {
						articleListAdapter.removeAll(state);
					}
				}
			)
			.addCase(filterArticles.fulfilled, (state, action) => {
				state.status = 'received';
				articleListAdapter.setAll(state, action.payload);
				state.hasMore = action.payload.length > state.limit;

				if (action.meta.arg.type === 'full') {
					articleListAdapter.setAll(state, action.payload);
				} else {
					articleListAdapter.addMany(state, action.payload);
				}
			})
			.addCase(
				filterArticles.rejected,
				(
					state,
					action: PayloadAction<
						{title: string; text: string} | undefined
					>
				) => {
					state.status = 'error';
					state.error = action.payload;
				}
			);
	},
});

export const getArticleList = articleListAdapter.getSelectors<StateSchema>(
	(state) => state.articles || articleListAdapter.getInitialState()
);

export const {
	actions: articleListActions,
	reducer: articleListReducer,
	useActions: useArticleListActions,
} = articleListSlice;
