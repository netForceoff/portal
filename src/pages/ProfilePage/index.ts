import { withSuspense } from 'shared/lib'
import { lazy } from 'react'

const ProfilePage = lazy(async () => await import('./ui/ProfilePage'))

export default withSuspense(ProfilePage)
