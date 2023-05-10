import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableProfileCard, getProfile } from '@/features/EditableProfileCard'
import { useAppDispatch } from '@/app/providers/store'
import { useParams } from 'react-router-dom'
import { Layout } from '@/widgets/Layout'

interface IProps extends JSX.IntrinsicAttributes {
  className?: string
}

const ProfilePage: FC<IProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProfile(id))
  }, [dispatch, id])

  return (
    <Layout className={className}>
      {() => {
        return (
          <>
            {t('profilePage')}
            <EditableProfileCard />
          </>
        )
      }}
    </Layout>
  )
}

export default ProfilePage
