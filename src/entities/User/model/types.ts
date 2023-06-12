import {FeatureFlags} from '@/shared/types/featureFlags';

export interface User {
	id: string;
	username: string;
	features?: FeatureFlags;
}

export interface UserSchema {
	user?: User;
}
