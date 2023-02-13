import { Button, ButtonVariant } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'

const PageError = (): JSX.Element => {
  const { t } = useTranslation()

  const handleClick = (): void => {
    window.location.reload()
  }

  return (
        <div className={styles.container}>
            <h3>{t('page.error.title')}</h3>
            <Button onClick={handleClick} variant={ButtonVariant.PRIMARY}>{t('page.error.button')}</Button>
        </div>
  )
}

export default PageError
