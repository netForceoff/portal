import { useTranslation } from 'react-i18next'

import { Layout } from '@/widgets/Layout'

import styles from './About.module.scss'

const About = (): JSX.Element => {
  const { t } = useTranslation('about')

  return (
        <Layout className={styles.test}>
            {() => t('about')}
        </Layout>
  )
}

export default About
