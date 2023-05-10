import { withSuspense } from '@/shared/lib'
import { lazy } from 'react'

const SidebarLink = lazy(async () => await import('./SidebarLink'))

export default withSuspense(SidebarLink)
