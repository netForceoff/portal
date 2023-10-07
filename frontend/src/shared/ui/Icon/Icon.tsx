import clsx from 'clsx';
import {FC, memo, SVGProps} from 'react';

import styles from './Icon.module.scss';

export interface IIconProps {
	className?: string;
	SVG: FC<SVGProps<SVGSVGElement>>;
	inverted?: boolean;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	onClick?: () => void;
}
const Icon: FC<IIconProps> = (props) => {
	const {className, SVG, inverted, onMouseEnter, onMouseLeave, onClick} =
		props;

	const CN = clsx(styles.Icon, className, {
		[styles.inverted]: inverted,
	});

	return (
		<SVG
			className={CN}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		/>
	);
};

export default memo(Icon);
