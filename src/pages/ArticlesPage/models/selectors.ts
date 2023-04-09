import { StateSchema } from 'app/providers/store'
import { ServerStatus, ServerError } from 'shared/types/server'

export const getArticleListStatus = (state: StateSchema): ServerStatus => state?.articles?.status || 'received'

export const getArticleListError = (state: StateSchema): ServerError | undefined => state?.articles?.error || undefined

export const getArticleListView = (state: StateSchema): 'table' | 'list' => state?.articles?.view || 'list'
