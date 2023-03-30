import styles from './LoginForm.module.scss'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import Text from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { FC, memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice'
import type { Fields } from '../../model/types'
import { getLoginError, getLoginPassword, getLoginStatus, getLoginUsername } from '../../model/selectors'
import { login } from '../../model/services'
import { withReducers } from 'shared/lib'
import { useAppDispatch } from 'app/providers/store'

const reducers = { login: loginReducer }

export interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

const LoginForm: FC<IProps> = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const status = useSelector(getLoginStatus)

  const disabled = status === 'request'

  const handleChangeField = useCallback((field: keyof Fields) => (value: string) => {
    dispatch(loginActions.setField({ field, value }))
  }, [dispatch])

  const handleClick = useCallback(() => {
    dispatch(login({ username, password }))
  }, [dispatch, username])

  return (
        <div className={styles.simpleLoginForm}>
          <Text title={t('simpleLoginForm')} />
            {error ? <Text text={error} colorType="error" /> : null}
            <Input
              disabled={disabled}
              onChange={handleChangeField('username')}
              autoFocus
              className={styles.input}
              type="text"
              value={username}
            />
            <Input
              disabled={disabled}
              onChange={handleChangeField('password')}
              className={styles.input}
              type="text"
              value={password}
            />
            <Button disabled={disabled} onClick={handleClick} className={styles.loginBtn}>
                {t('LogIn')}
            </Button>
        </div>
  )
}

export default memo(withReducers(LoginForm, reducers))
