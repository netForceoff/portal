import { lazy } from 'react'

import { withSuspense } from '@/shared/lib'

const About = lazy(async () => await import('./ui/About'))

export default withSuspense(About)
