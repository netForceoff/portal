import { withSuspense } from 'shared/lib'
import { lazy } from 'react'

const Profile = lazy(async () => await import('./ui/Profile'))

export default withSuspense(Profile)
