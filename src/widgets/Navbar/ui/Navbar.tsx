import clsx from 'clsx'
import { FC, useState, ReactNode, useCallback, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { Button, ButtonVariant, ButtonColor } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/auth/modalByUsername'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, userActions } from 'entities/User'

interface IProps {
  className?: string
}

// TODO - не срабатывает анимация модалки после успешного логина
const Navbar: FC<IProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false)
  const { t } = useTranslation()
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user && isOpenAuthModal) {
      setIsOpenAuthModal(false)
    }
  }, [user, isOpenAuthModal])

  const toggleAuthModal = useCallback(() => {
    setIsOpenAuthModal(prev => !prev)
  }, [])

  const handleLogOut = useCallback(() => {
    dispatch(userActions.removeUser())
  }, [dispatch])

  const renderAuthModal = (): ReactNode => isOpenAuthModal ? <LoginModal onCloseOutside={toggleAuthModal} /> : null

  const renderLogInButton = (): JSX.Element => (
    <Button
      color={ButtonColor.PRIMARY_INVERTED}
      className={styles.links}
      variant={ButtonVariant.CLEAR}
      onClick={toggleAuthModal}
    >
      {t('LogIn')}
    </Button>
  )

  const renderLogOutButton = (): JSX.Element => (
    <Button
      color={ButtonColor.PRIMARY_INVERTED}
      className={styles.links}
      variant={ButtonVariant.CLEAR}
      onClick={handleLogOut}
    >
      {t('LogOut')}
    </Button>
  )

  return (
    <div className={clsx(styles.navbar, className)}>
      {user ? renderLogOutButton() : renderLogInButton()}
      {renderAuthModal()}
    </div>
  )
}

export default Navbar
