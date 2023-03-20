import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableProfileCard } from 'features/EditableProfileCard'

interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

const ProfilePage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation('profile')

  return (
    <div className={className}>
        {t('profilePage')}
        <EditableProfileCard />
    </div>
  )
}

export default ProfilePage
