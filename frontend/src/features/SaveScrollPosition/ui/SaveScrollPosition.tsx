import {FC, ReactNode, useEffect, MutableRefObject} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {getScroll} from '../model/selectors';
import {
	saveScrollPositionActions,
	saveScrollPositionReducer,
} from '../model/slice';

import {useAppDispatch} from '@/app/providers/store';
import {withReducers} from '@/shared/lib';
import useDebounce from '@/shared/lib/hooks/useDebounce';

export interface ISaveScrollPositionProps extends JSX.IntrinsicAttributes {
	containerRef: MutableRefObject<HTMLElement | null>;
	children?: ReactNode;
}

const reducers = {
	scrollPosition: saveScrollPositionReducer,
};

const SaveScrollPosition: FC<ISaveScrollPositionProps> = (props) => {
	const {containerRef, children} = props;
	const dispatch = useAppDispatch();
	const {pathname} = useLocation();
	const scrollPosition = useSelector(getScroll);

	const callback = () => {
		dispatch(
			saveScrollPositionActions.setScrollPosition({
				path: pathname,
				position: containerRef?.current?.scrollTop || 0,
			})
		);
	};

	const debounced = useDebounce(callback, 1000);

	useEffect(() => {
		containerRef?.current?.scroll(
			0,
			scrollPosition?.[location.pathname] || 0
		);

		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', debounced);
		}

		return () => {
			containerRef?.current?.removeEventListener('scroll', debounced);
		};
	}, [debounced, containerRef]);

	return <>{children}</>;
};

export default withReducers(SaveScrollPosition, reducers, false);
