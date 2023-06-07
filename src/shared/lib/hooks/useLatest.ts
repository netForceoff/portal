import {useRef} from 'react';

export const useLatest = <Value>(value: Value) => {
	const ref = useRef<Value>(value);

	ref.current = value;

	return ref;
};
