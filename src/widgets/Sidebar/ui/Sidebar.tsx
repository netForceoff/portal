import clsx from 'clsx'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useState, type FC } from 'react'
import { AppLink, AppLinkVariant, Button, ButtonVariant, ButtonBackgroundType, ButtonSize, ButtonColor } from 'shared/ui'
import styles from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/router'
import House from 'shared/assets/icons/house.svg'
import List from 'shared/assets/icons/list.svg'

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
            <Button
             backgroundType={ButtonBackgroundType.SQUARE}
             size={ButtonSize.XL}
             color={ButtonColor.PRIMARY_INVERTED}
             variant={ButtonVariant.FILLED_INVERTED}
             className={styles.collapseBtn}
             onClick={toggle}>{collapsed ? '>' : '<'}
             </Button>
             <div className={styles.links}>
             <AppLink
                  variant={AppLinkVariant.SECONDARY}
                  to={RoutePath.about}
                  className={styles.link}
                >
                    <List className={styles.icon} />
                    <span className={styles.item}>{t('links.about')}</span>
                </AppLink>
                <AppLink
                  variant={AppLinkVariant.SECONDARY}
                  to={RoutePath['/']}
                  className={styles.link}
                >
                  <House className={styles.icon} />
                  <span className={styles.item}>{t('links.main')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher className={styles.lang} short={collapsed} />
            </div>
        </div>
  )
}

export default Sidebar
