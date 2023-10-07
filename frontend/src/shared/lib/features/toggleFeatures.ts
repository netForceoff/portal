import {FeatureKeys} from '../../types/featureFlags';

import {getFeatureFlag} from './setFeatures';

interface ToggleFeaturesOptions<T> {
	name: FeatureKeys;
	on: () => T;
	off: () => T;
}

export const toggleFeatures = <T>({
	name,
	on,
	off,
}: ToggleFeaturesOptions<T>): T => {
	if (getFeatureFlag(name)) {
		return on();
	}

	return off();
};
