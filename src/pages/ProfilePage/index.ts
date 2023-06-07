import {lazy} from 'react';

import {withSuspense} from '@/shared/lib';

const ProfilePage = lazy(async () => await import('./ui/ProfilePage'));

export default withSuspense(ProfilePage);
