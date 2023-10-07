import clsx from 'clsx';
import {FC} from 'react';
import {Link, type LinkProps} from 'react-router-dom';

import styles from './AppLink.module.scss';

export enum AppLinkVariant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
}

const AppLink: FC<IProps> = (props) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			{...otherProps}
			to={to}
			className={clsx([styles.link, styles[variant], className])}
		>
			{children}
		</Link>
	);
};

export default AppLink;
