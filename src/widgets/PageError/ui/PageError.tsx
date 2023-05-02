import { Button, ButtonColor } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'
import { FC } from 'react'

interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

const PageError: FC<IProps> = () => {
  const { t } = useTranslation()

  const handleClick = (): void => {
    window.location.reload()
  }

  return (
        <div className={styles.container}>
            <h3>{t('page.error.title')}</h3>
            <Button onClick={handleClick} color={ButtonColor.PRIMARY_INVERTED}>{t('page.error.button')}</Button>
        </div>
  )
}

export default PageError
