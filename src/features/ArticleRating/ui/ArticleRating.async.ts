import {FC, lazy} from 'react';

import type {IArticleRatingProps} from './ArticleRating';

import {withSuspense} from '@/shared/lib';

const ArticleRating = lazy<FC<IArticleRatingProps>>(
	async () => await import('./ArticleRating')
);

export default withSuspense(ArticleRating);
