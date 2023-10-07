import clsx from 'clsx';
import {FC, memo} from 'react';

import styles from './Text.module.scss';

type ColorType = 'error' | 'default';

type Align = 'left' | 'center' | 'right';

type Size = 'l' | 'm';

interface IProps {
	align?: Align;
	className?: string;
	title?: string;
	text?: string;
	colorType?: ColorType;
	size?: Size;
}

const Text: FC<IProps> = (props): JSX.Element => {
	const {
		align = 'left',
		className,
		title,
		text,
		colorType = 'default',
		size,
	} = props;

	return (
		<div
			className={clsx(
				className,
				styles[colorType],
				styles[align],
				styles[size || '']
			)}
		>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	);
};

export default memo(Text);
