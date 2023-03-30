import { ServerStatus } from 'shared/types/server'

export interface LoadingArticleSchema {
  error?: {
    title: string
    text: string
  }
  status: ServerStatus
}
