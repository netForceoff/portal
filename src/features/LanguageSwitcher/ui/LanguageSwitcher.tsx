import clsx from 'clsx'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant, ButtonColor } from '@/shared/ui'

import styles from './LanguageSwitcher.module.scss'
interface IProps {
  className?: string
  short?: boolean
}

const LanguageSwitcher: FC<IProps> = (props): JSX.Element => {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const text = t(short ? 'changeLanguageShort' : 'changeLanguage')

  return (
    <Button variant={ButtonVariant.CLEAR} color={ButtonColor.PRIMARY_INVERTED} className={clsx([styles.languageSwitcher, className])} onClick={toggle}>
        {text}
    </Button>
  )
}

export default LanguageSwitcher
