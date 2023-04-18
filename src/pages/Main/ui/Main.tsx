import { useTranslation } from 'react-i18next'
import { Layout } from 'widgets/Layout'

const Main = (): JSX.Element => {
  const { t } = useTranslation('main')
  return (
      <Layout>
        {() => t('page.main')}
      </Layout>
  )
}

export default Main
