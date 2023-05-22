import clsx from 'clsx'
import { Comments } from '@/entities/Comment'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui'
import { getArticleCommentsSelector } from '../model/slice'
import { useComments } from '../model/service'
import { ArticleAddingComment } from '@/features/ArticleAddingComment'

export interface IArticleCommentsProps extends JSX.IntrinsicAttributes {
  className?: string
  id?: string
}

const ArticleComments: FC<IArticleCommentsProps> = (props) => {
  const { className, id } = props
  const { t } = useTranslation('article')
  const { isLoading } = useComments(id)
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
