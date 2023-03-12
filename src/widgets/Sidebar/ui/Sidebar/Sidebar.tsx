import clsx from 'clsx'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useState, type FC, ReactNode } from 'react'
import { Button, ButtonVariant, ButtonBackgroundType, ButtonSize, ButtonColor } from 'shared/ui'
import styles from './Sidebar.module.scss'
import SidebarLink from '../SidebarLink/SidebarLink'
import { Links } from '../../config'

interface IProps {
  className?: string
}

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)

  const toggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const CN = clsx(styles.sidebar, className, {
    [styles.collapsed]: collapsed
  })

  const renderLinks = (): ReactNode =>
    Links.map(link => <SidebarLink key={link.path} collapsed={collapsed} Icon={link.Icon} path={link.path} text={link.text} />)

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
              {renderLinks()}
            </div>
            <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher className={styles.lang} short={collapsed} />
            </div>
        </div>
  )
}

export default Sidebar
