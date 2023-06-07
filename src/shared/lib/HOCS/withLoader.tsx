import {ComponentType} from 'react';

import Loader from '../../ui/Loader/Loader';

interface IProps extends JSX.IntrinsicAttributes {
	className?: string;
	isLoading: boolean;
}

function withLoader<P extends IProps>(
	Component: ComponentType<Omit<P, 'className' | 'isLoading'>>
) {
	return function HOCLoader(props: P) {
		const {className, isLoading, ...otherProps} = props;

		if (isLoading) {
			return <Loader className={className} />;
		}

		return <Component className={className} {...otherProps} />;
	};
}

export default withLoader;
