import {lazy} from 'react';

import {IArticlesPageProps} from './ui/ArticlesPage';

import {withSuspense} from '@/shared/lib';

const ArticlesPage = lazy(async () => await import('./ui/ArticlesPage'));

export default withSuspense<IArticlesPageProps>(ArticlesPage);
