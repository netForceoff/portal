import { StateSchema } from 'app/providers/store'
import { ServerStatus } from 'shared/types/server'

const getArticleCommentsStatus = (state: StateSchema): ServerStatus => state.articleComments?.status || 'received'

const getArticleCommentsError = (state: StateSchema): { text: string, title: string } | undefined => state.articleComments?.error || undefined

export {
  getArticleCommentsError,
  getArticleCommentsStatus
}
