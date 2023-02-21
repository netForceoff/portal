import clsx from 'clsx'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useState, type FC } from 'react'
import { Button } from 'shared/ui'
import styles from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

interface IProps {
  className?: string
}

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const CN = clsx(styles.sidebar, className, {
    [styles.collapsed]: collapsed
  })

  return (
        <div className={CN}>
            <Button onClick={toggle}>{t('sidebar.button')}</Button>
            <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher />
            </div>
        </div>
  )
}

export default Sidebar
