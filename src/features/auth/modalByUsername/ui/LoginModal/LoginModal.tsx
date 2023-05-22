import LoginForm from '../LoginForm'
import { Modal } from '@/shared/ui/Modal'
import { FC } from 'react'

interface IProps {
  onCloseOutside: () => void
}

const LoginModal: FC<IProps> = ({ onCloseOutside }): JSX.Element => {
  return (
    <Modal onCloseOutside={onCloseOutside}>
        <LoginForm />
    </Modal>
  )
}

export default LoginModal
