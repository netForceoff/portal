import clsx from 'clsx'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useComments } from '../model/service'
import { getArticleCommentsSelector } from '../model/slice'

import { Comments } from '@/entities/Comment'
import { ArticleAddingComment } from '@/features/ArticleAddingComment'
import { Text } from '@/shared/ui'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface IArticleCommentsProps extends JSX.IntrinsicAttributes {
  className?: string
  id?: string
}

const ArticleComments: FC<IArticleCommentsProps> = (props) => {
  const { className, id } = props
  const { t } = useTranslation('article')
  const { isLoading } = useComments({ id })
  const comments = useSelector(getArticleCommentsSelector.selectAll)

  if (isLoading) {
    return <Skeleton width="100%" height="50px" />
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
