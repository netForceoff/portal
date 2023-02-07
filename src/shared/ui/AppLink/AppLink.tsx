import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import clsx from 'clsx'
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}


interface IProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<IProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    
    return (
        <Link
            {...otherProps}
            to={to}
            className={clsx([styles.link, styles[theme], className])}
        >
            {children}
        </Link>
    );
}

export default AppLink;