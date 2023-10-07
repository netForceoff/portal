import {getComments} from './model/service';
import {articleCommentsReducer} from './model/slice';
import type {ArticleCommentsSchema} from './model/types';
import ArticleComments from './ui/ArticleComments';

export {getComments, ArticleCommentsSchema, ArticleComments};

export {articleCommentsReducer};
