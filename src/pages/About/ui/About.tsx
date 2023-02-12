import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'

const About = (): JSX.Element => {
  const { t } = useTranslation('about')

  return (
        <div className={styles.test}>
            {t('about')}
        </div>
  )
}

export default About
