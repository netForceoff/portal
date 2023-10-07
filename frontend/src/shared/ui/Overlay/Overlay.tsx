import clsx from 'clsx';
import {FC, ReactNode} from 'react';

import styles from './Overlay.module.scss';

export interface IOverlayProps {
	className?: string;
	children: ReactNode;
}
const Overlay: FC<IOverlayProps> = (props) => {
	const {className, children} = props;

	return <div className={clsx(styles.overlay, className)}>{children}</div>;
};

export default Overlay;
