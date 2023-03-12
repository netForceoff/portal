import { AppLink, AppLinkVariant } from 'shared/ui'
import styles from './SidebarLink.module.scss'
import { FC } from 'react'
import clsx from 'clsx'

interface IProps {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  path: string
  text: string
  collapsed: boolean
}

const SidebarLink: FC<IProps> = ({ collapsed, Icon, path, text }) => {
  return (
        <AppLink
        variant={AppLinkVariant.SECONDARY}
        to={path}
        className={clsx(styles.link, { [styles.collapsed]: collapsed })}
      >
          <Icon className={styles.icon} />
          <span className={styles.item}>{text}</span>
      </AppLink>
  )
}

export default SidebarLink
