import { StateSchema } from '@/app/providers/store'
import { Profile } from './types'
import { ServerStatus } from '@/shared/types/server'

export const getProfileState = (state: StateSchema): Profile | undefined => state.profile?.profile

export const getProfileError = (state: StateSchema): { title: string, text: string } | undefined => state.profile?.error

export const getProfileStatus = (state: StateSchema): ServerStatus => state.profile?.status || 'received'

export const getProfileReadOnly = (state: StateSchema): boolean => state.profile?.readonly || false
