import { IArticle } from 'entities/Article'
import { ServerError, ServerStatus } from 'shared/types/server'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticleListSchema extends EntityState<IArticle> {
  error?: ServerError
  status: ServerStatus
  view?: 'table' | 'list'
}
