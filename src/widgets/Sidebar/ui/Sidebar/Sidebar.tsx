import clsx from "clsx";
import {LanguageSwitcher} from "features/LanguageSwitcher";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { useState, FC } from "react";
import { Button } from "shared/ui";
import styles from './Sidebar.module.scss';

interface IProps {
    className?: string
}


export const Sidebar: FC<IProps> = (props) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState(false);


    const toggle = () => {
        setCollapsed(prev => !prev);
    }
    
    const CN = clsx(styles.sidebar, className, {
        [styles.collapsed]: collapsed
    });
    
    return (
        <div className={CN}>
            <Button onClick={toggle}>Toggle</Button>
            <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher />
            </div>
        </div>
    )
}