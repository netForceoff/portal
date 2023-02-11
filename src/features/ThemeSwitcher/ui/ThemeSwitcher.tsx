import { useTheme } from "entities/theme";
import Icon from 'shared/assets/icons/theme.svg';
import { Button } from "shared/ui";
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
    const {toggle} = useTheme();

    return (
        <Button onClick={toggle}><Icon className={styles.icon} /></Button>
    )
}

export default ThemeSwitcher;