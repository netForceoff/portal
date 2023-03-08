import LoginForm from '../LoginForm'
import { Modal } from 'entities/Modal'
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
