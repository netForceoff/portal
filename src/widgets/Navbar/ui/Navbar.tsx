import clsx from 'clsx'
import { type FC } from 'react'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkVariant } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface IProps {
  className?: string
}

const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
        <div className={clsx(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink
                    variant={AppLinkVariant.SECONDARY}
                    className={styles.link}
                    to="/about"
                >
                    {t('links.about')}
                </AppLink>
            </div>
        </div>
  )
}

export default Navbar
