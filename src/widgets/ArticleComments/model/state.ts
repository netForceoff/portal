import {ArticleCommentsSchema} from './types';

export const initialArticleCommentsState: ArticleCommentsSchema = {
	status: 'received',
	ids: [],
	entities: {},
};
