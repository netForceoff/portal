import {ComponentType} from 'react';

import Text from '../../ui/Text/Text';

interface IProps extends JSX.IntrinsicAttributes {
	className?: string;
	error?: {
		title: string;
		text: string;
	};
}

function withError<P extends IProps>(
	Component: ComponentType<Omit<P, 'className' | 'error'>>
) {
	return function HOCError(props: P) {
		const {className, error, ...otherProps} = props;

		if (error) {
			return (
				<Text
					colorType="error"
					className={className}
					title={error.title}
					text={error.text}
				/>
			);
		}

		return <Component className={className} {...otherProps} />;
	};
}

export default withError;
