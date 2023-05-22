import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAddComentMutation } from '../model/service'

import { getArticleProps } from '@/entities/Article'
import { AddingComment } from '@/entities/Comment'
import { getUser } from '@/entities/User'

export interface IArticleAddingCommentProps {
  className?: string
}
const ArticleAddingComment: FC<IArticleAddingCommentProps> = (props) => {
  const { t } = useTranslation('article')
  const [addComment] = useAddComentMutation()
  const user = useSelector(getUser)
  const article = useSelector(getArticleProps)

  const onClick = useCallback((value: string) => {
    addComment({ articleId: article?.id || '', userId: user?.id || '', text: value })
  }, [addComment, user?.id, article?.id])

  return <AddingComment buttonText={t('buttons.add')} onClick={onClick} />
}

export default ArticleAddingComment
