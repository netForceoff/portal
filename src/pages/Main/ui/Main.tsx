import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
  const { t } = useTranslation('main')
  return (
        <div>
            {t('page.main')}
        </div>
  )
}

export default Main
