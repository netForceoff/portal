import { Link } from "react-router-dom";
import clsx from 'clsx'
import { FC } from 'react';
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui";


interface IProps {
    className?: string;
}


const Navbar: FC<IProps> = ({className}) => {
    return (
        <div className={clsx(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={styles.link} to="/about">About</AppLink>
            </div>

        </div>
    )
}

export default Navbar;