import styles from './LoginForm.module.scss'
import { Button, Input, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions } from '../../model/slice'
import type { Fields } from '../../model/types'
import { getLoginState } from '../../model/selectors'
import { login } from '../../model/services'

export const LoginForm = (): JSX.Element => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { fields: { username, password }, error, status } = useSelector(getLoginState)
  const disabled = status === 'request'

  useEffect(() => {
    return () => {
      dispatch(loginActions.clear())
    }
  }, [dispatch])

  const handleChangeField = useCallback((field: keyof Fields) => (value: string) => {
    dispatch(loginActions.setField({ field, value }))
  }, [dispatch])

  const handleClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(login({ username, password }))
  }, [dispatch, username, password])

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

export default memo(LoginForm)
