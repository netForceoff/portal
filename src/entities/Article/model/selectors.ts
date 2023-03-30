import { StateSchema } from 'app/providers/store'
import { IArticle } from './types'

const getArticleProps = (state: StateSchema): IArticle | undefined => state?.article?.data || undefined

export {
  getArticleProps
}
