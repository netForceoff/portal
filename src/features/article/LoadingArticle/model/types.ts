import { ServerStatus } from 'shared/types/server'
import { IArticle } from 'entities/Article'

export interface ArticleSchema {
  error?: {
    title: string
    text: string
  }
  status: ServerStatus
  article?: IArticle
}
