import clsx from 'clsx';
import {FC, memo} from 'react';

import {IComment} from '../../model/types';

import {Text} from '@/shared/ui';

import styles from './Comment.module.scss';

export interface ICommentProps extends IComment, JSX.IntrinsicAttributes {
	className?: string;
}

const Comment: FC<ICommentProps> = (props) => {
	const {className, text} = props;

	return (
		<div className={clsx(styles.comment, className)}>
			<Text text={text} />
		</div>
	);
};

export default memo(Comment);
