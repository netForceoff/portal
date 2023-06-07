import {lazy} from 'react';

import {withSuspense} from '@/shared/lib';

const SidebarLink = lazy(async () => await import('./SidebarLink'));

export default withSuspense(SidebarLink);
