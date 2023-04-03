import { EntityState } from '@reduxjs/toolkit'
import { IComment } from 'entities/Comments'
import { ServerError, ServerStatus } from 'shared/types/server'

export interface ArticleCommentsSchema extends EntityState<IComment> {
  error?: ServerError
  status: ServerStatus
}
