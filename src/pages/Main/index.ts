import { lazy } from 'react'
import { withSuspense } from '@/shared/lib'

const Main = lazy(async () => await import('./ui/Main'))

export default withSuspense(Main)
