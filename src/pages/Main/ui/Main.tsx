import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
  const { t } = useTranslation('main')
  return (
        <section>
            {t('page.main')}
        </section>
  )
}

export default Main
