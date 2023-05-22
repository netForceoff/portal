import { memo, FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { updateProfile } from '../../model/services'
import { profileActions } from '../../model/slice'

import { useAppDispatch } from '@/app/providers/store'
import { Button } from '@/shared/ui'

import styles from './EditableProfileCardHeader.module.scss'

interface IProps {
  readOnly?: boolean
}

const EditableProfileCardHeader: FC<IProps> = (props): JSX.Element => {
  const { readOnly } = props
  const { t } = useTranslation('profile')
  const buttonText = readOnly ? 'button.edit' : 'button.cancel'
  const dispatch = useAppDispatch()

  const handleClick = useCallback(() => {
    dispatch(profileActions.setReadOnly(!readOnly))
  }, [dispatch, readOnly])

  const handleClickSave = useCallback(() => {
    dispatch(updateProfile())
  }, [dispatch])

  return (
        <div className={styles.header}>
            <Button
                onClick={handleClick}
                className={styles.button}
            >
                {t(buttonText)}
            </Button>
            {!readOnly && <Button
                onClick={handleClickSave}
                className={styles.button}
            >
                {t('button.save')}
            </Button>
            }
    </div>
  )
}

export default memo(EditableProfileCardHeader)
