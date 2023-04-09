import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'

const About = (): JSX.Element => {
  const { t } = useTranslation('about')

  return (
        <section className={styles.test}>
            {t('about')}
        </section>
  )
}

export default About
