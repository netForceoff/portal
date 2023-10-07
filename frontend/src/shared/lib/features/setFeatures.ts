import {FeatureFlags, FeatureKeys} from '@/shared/types/featureFlags';

let featureFlags: Partial<FeatureFlags> = {};

export const getFeatureFlag = (name: FeatureKeys): boolean =>
	featureFlags[name] || false;

export const setFeatureFlag = (name: FeatureKeys, value: boolean): void => {
	featureFlags[name] = value;
};

export const setFeatureFlags = (flags?: FeatureFlags) => {
	if (flags) {
		featureFlags = flags;
	}
};
