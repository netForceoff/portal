import { StateSchema } from 'app/providers/store'
import { IArticle } from 'entities/Article'
import { ServerStatus } from 'shared/types/server'

const getArticleProps = (state: StateSchema): IArticle | undefined => state?.article?.article || undefined

const getArticleStatus = (state: StateSchema): ServerStatus => state.article?.status || 'received'

const getArticleError = (state: StateSchema): { text: string, title: string } | undefined => state.article?.error || undefined

export {
  getArticleProps,
  getArticleError,
  getArticleStatus
}
