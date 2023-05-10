import { StateSchema } from '@/app/providers/store'
import { ServerStatus, ServerError } from '@/shared/types/server'

export const getArticleListStatus = (state: StateSchema): ServerStatus => state?.articles?.status || 'received'

export const getArticleListError = (state: StateSchema): ServerError | undefined => state?.articles?.error || undefined

export const getArticleListView = (state: StateSchema): 'table' | 'list' => state?.articles?.view || 'list'

export const getArticleListPage = (state: StateSchema): number => state.articles?.page || 1

export const getArticleListSortBy = (state: StateSchema) => state.articles?.sort || 'title'

export const getArticleListOrder = (state: StateSchema) => state.articles?.order || 'desc'

export const getArticleListSearch = (state: StateSchema) => state.articles?.search || ''
