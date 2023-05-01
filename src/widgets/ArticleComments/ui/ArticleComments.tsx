import clsx from 'clsx'
import {Comments } from 'entities/Comment'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
// import styles from './ArticleComments.module.scss'
import { useSelector } from 'react-redux'
import { getArticleCommentsStatus } from '../model/selectors'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui'
import { getArticleCommentsSelector } from '../model/slice'
import { Error } from 'entities/Error'
import { useComments } from '../model/service'
import { ArticleAddingComment } from 'features/ArticleAddingComment'

export interface IArticleCommentsProps extends JSX.IntrinsicAttributes {
  className?: string
  id: string
}

const ArticleComments: FC<IArticleCommentsProps> = (props) => {
  const { className, id } = props
  const { t } = useTranslation('article')
  const { isLoading, error } = useComments(id)
  const status = useSelector(getArticleCommentsStatus)
  // const error = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleCommentsSelector.selectAll)

  if (isLoading) {
    return <Skeleton width="100%" height="50px" />
  }

  if (error) {
    return <Error title={error.title} text={error.text} />
  }

  if (!comments.length) {
    return <Text text={t('article.comments.nothingFound')} />
  }

  return (
    <div className={clsx(className)}>
        <ArticleAddingComment />
        <Comments comments={comments} />
    </div>
  )
}

export default ArticleComments
