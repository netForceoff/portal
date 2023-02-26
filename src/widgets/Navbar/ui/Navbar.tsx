import clsx from 'clsx'
import { FC, useState, ReactNode } from 'react'
import styles from './Navbar.module.scss'
import { Modal, Button, ButtonVariant, ButtonColor } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface IProps {
  className?: string
}

const Navbar: FC<IProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false)
  const { t } = useTranslation()

  const toggleAuthModal = (): void => {
    setIsOpenAuthModal(prev => !prev)
  }

  const renderAuthModal = (): ReactNode => isOpenAuthModal ? <Modal onCloseOutside={toggleAuthModal}>TEST</Modal> : null

  return (
        <div className={clsx(styles.navbar, className)}>
          <Button
            color={ButtonColor.PRIMARY_INVERTED}
            className={styles.links}
            variant={ButtonVariant.CLEAR}
            onClick={toggleAuthModal}
          >
            {t('LogIn')}
          </Button>
          {renderAuthModal()}
        </div>
  )
}

export default Navbar
