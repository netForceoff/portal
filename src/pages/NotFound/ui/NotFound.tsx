import { useTranslation } from 'react-i18next'
import { Layout } from '@/widgets/Layout'

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Layout>
     {() => t('page.notFound')}
    </Layout>
  )
}

export default NotFound
