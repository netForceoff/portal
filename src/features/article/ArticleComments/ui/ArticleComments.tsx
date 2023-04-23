import clsx from 'clsx'
import { AddingComment, Comments } from 'entities/Comment'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
// import styles from './ArticleComments.module.scss'
import { useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsStatus } from '../model/selectors'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui'
import { getArticleCommentsSelector } from '../model/slice'
import { Error } from 'entities/Error'
import { addComment } from '../model/service'
import { useAppDispatch } from 'app/providers/store'

export interface IArticleCommentsProps extends JSX.IntrinsicAttributes {
  className?: string
}

// TODO - возможно стоило утащить на уровень widgets
const ArticleComments: FC<IArticleCommentsProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article')
  const status = useSelector(getArticleCommentsStatus)
  const error = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleCommentsSelector.selectAll)
  const dispatch = useAppDispatch()

  const onClick = useCallback((value: string) => {
    dispatch(addComment(value))
  }, [dispatch])

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
    <div className={clsx(className)}>
        <AddingComment buttonText={t('buttons.add')} onClick={onClick} />
        <Comments comments={comments} />
    </div>
  )
}

export default ArticleComments
