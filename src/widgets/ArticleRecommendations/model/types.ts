import { EntityState } from '@reduxjs/toolkit'
import { IArticle } from 'entities/ArticleList'
import { ServerError, ServerStatus } from 'shared/types/server'

export interface ArticleRecommendationsSchema extends EntityState<IArticle> {
  error?: ServerError
  status: ServerStatus
}
