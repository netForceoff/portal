import { profileReducer } from 'entities/Profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { withReducers } from 'shared/lib'

const reducers = {
  profile: profileReducer
}

interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

const ProfilePage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={className}>
        {t('profilePage')}
    </div>
  )
}

export default withReducers(ProfilePage, reducers)
