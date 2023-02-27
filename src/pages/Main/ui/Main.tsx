import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const Main = (): JSX.Element => {
  const { t } = useTranslation('main')
  return (
        <div>
          <Counter />
            {t('page.main')}
        </div>
  )
}

export default Main
