import { Link } from "react-router-dom";
import clsx from 'clsx'
import { FC } from 'react';
import styles from './Navbar.module.scss';
import {AppLink, AppLinkVariant} from "shared/ui";
import { ThemeSwitcher } from "features/ThemeSwitcher";


interface IProps {
    className?: string;
}


const Navbar: FC<IProps> = ({className}) => {
    return (
        <div className={clsx(styles.navbar, className)}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink variant={AppLinkVariant.SECONDARY} className={styles.link} to="/about">About</AppLink>
            </div>

        </div>
    )
}

export default Navbar;