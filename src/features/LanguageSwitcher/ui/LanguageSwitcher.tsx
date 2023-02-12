import { Button, ButtonVariant } from 'shared/ui'
import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = (): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button variant={ButtonVariant.SECONDARY} className={styles.languageSwitcher} onClick={toggle}>
        {t('changeLanguage')}
    </Button>
  )
}

export default LanguageSwitcher
