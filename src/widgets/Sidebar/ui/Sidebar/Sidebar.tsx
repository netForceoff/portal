import clsx from 'clsx'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useState, type FC, ReactNode } from 'react'
import { Button, ButtonVariant, ButtonBackgroundType, ButtonSize, ButtonColor } from 'shared/ui'
import styles from './Sidebar.module.scss'
import SidebarLink from '../SidebarLink/SidebarLink.async'
import { useSelector } from 'react-redux'
import { getSidebarLinks } from '../../model/selectors'

export interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

export const Sidebar: FC<IProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const links = useSelector(getSidebarLinks)

  const toggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const CN = clsx(styles.sidebar, className, {
    [styles.collapsed]: collapsed
  })

  const renderLinks = (): ReactNode[] => links.map(link => <SidebarLink key={link.path} collapsed={collapsed} Icon={link.Icon} path={link.path} text={link.text} />)

  return (
        <aside className={CN}>
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
        </aside>
  )
}

export default Sidebar
