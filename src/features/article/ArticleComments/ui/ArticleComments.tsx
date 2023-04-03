import clsx from 'clsx'
import { Comments } from 'entities/Comments'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ArticleComments.module.scss'
import { useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsStatus } from '../model/selectors'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui'
import { withReducers } from 'shared/lib'
import { articleCommentsReducer, getArticleCommentsSelector } from '../model/slice'
import { Error } from 'entities/Error'

export interface IArticleCommentsProps extends JSX.IntrinsicAttributes {
  className?: string
}

const reducers = {
  articleComments: articleCommentsReducer
}

const ArticleComments: FC<IArticleCommentsProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article')
  const status = useSelector(getArticleCommentsStatus)
  const error = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleCommentsSelector.selectAll)

  if (status === 'request') {
    return <Skeleton width="100%" height="50px" />
  }

  if (error) {
    return <Error title={error.title} text={error.text} />
  }

  if (!comments.length) {
    return <Text text={t('article.comments.nothingFound')} />
  }

  return (
    <div className={clsx(styles.ArticleComments, className)}>
        <Comments comments={comments} />
    </div>
  )
}

export default withReducers(ArticleComments, reducers)
