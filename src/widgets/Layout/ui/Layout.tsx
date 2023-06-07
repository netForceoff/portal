import clsx from 'clsx';
import {FC, MutableRefObject, ReactNode, useRef} from 'react';

import styles from './Layout.module.scss';

export interface ILayoutProps {
	className?: string;
	children: (ref: MutableRefObject<HTMLElement | null>) => ReactNode;
}
const Layout: FC<ILayoutProps> = (props) => {
	const {className, children} = props;
	const ref = useRef<HTMLElement>(null);

	return (
		<section ref={ref} className={clsx(styles.layout, className)}>
			{children(ref)}
		</section>
	);
};

export default Layout;
