import { StateSchema } from 'app/providers/store'
import { ServerStatus } from 'shared/types/server'

const getLoadingArticleStatus = (state: StateSchema): ServerStatus => state.loadingArticle?.status || 'received'

const getLoadingArticleError = (state: StateSchema): { text: string, title: string } | undefined => state.loadingArticle?.error || undefined

export {
  getLoadingArticleError,
  getLoadingArticleStatus
}
