import {FC, useEffect, MutableRefObject, ReactNode} from 'react';

export interface IInfinityScrollWrapperProps {
	callback: () => void;
	wrapperRef: MutableRefObject<HTMLElement | null>;
	triggerRef: MutableRefObject<HTMLElement | null>;
	children: ReactNode;
}
const InfinityScrollWrapper: FC<IInfinityScrollWrapperProps> = ({
	callback,
	children,
	wrapperRef,
	triggerRef,
}) => {
	useEffect(() => {
		if (triggerRef.current) {
			const options = {
				root: wrapperRef.current,
				rootMargin: '0px',
				threshold: 1.0,
			};

			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.observe(triggerRef.current);

			return () => {
				triggerRef?.current && observer.unobserve(triggerRef.current);
			};
		}
	}, [callback, wrapperRef, triggerRef]);

	return <>{children}</>;
};

export default InfinityScrollWrapper;
