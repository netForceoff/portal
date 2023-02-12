import { useTranslation } from 'react-i18next'

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation()

  return (
        <div>{t('page.notFound')}</div>
  )
}

export default NotFound
