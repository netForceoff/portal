import {FC, memo} from 'react';

import {Text} from '@/shared/ui';

export interface IErrorProps {
	className?: string;
	title?: string;
	text?: string;
}

const Error: FC<IErrorProps> = (props) => {
	const {className, title, text} = props;

	return (
		<Text
			colorType="error"
			className={className}
			title={title}
			text={text}
		/>
	);
};

export default memo(Error);
