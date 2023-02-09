import { useTheme } from "entities/theme";
import Icon from 'shared/assets/icons/theme.svg';
import { Button } from "shared/ui";
import styles from './Switcher.module.scss';

const Switcher = () => {
    const {toggle} = useTheme();

    return (
        <Button className={styles.button} onClick={toggle}><Icon className={styles.icon} /></Button>
    )
}

export default Switcher;