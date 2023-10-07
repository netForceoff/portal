import {lazy} from 'react';

import {withSuspense} from '@/shared/lib';

const NotFound = lazy(async () => await import('./ui/NotFound'));

export default withSuspense(NotFound);
