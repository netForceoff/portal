import { Article, articleReducer, getArticleProps, IArticleProps } from 'entities/Article'
import { FC, memo, useEffect } from 'react'
import styles from './LoadingArticle.module.scss'
import { withReducers } from 'shared/lib'
import { useSelector } from 'react-redux'
import { getLoadingArticleError, getLoadingArticleStatus } from '../model/selectors'
import withError from 'shared/lib/HOCS/withError'
import { useAppDispatch } from 'app/providers/store'
import { getArticle } from '../model/service'
import { loadingArticleReducer } from '../model/slice'
import Skeleton from 'shared/ui/Skeleton/Skeleton'

const reducers = {
  article: articleReducer,
  loadingArticle: loadingArticleReducer
}

export interface ILoadingArticleProps extends JSX.IntrinsicAttributes {
  uuid: string
}

const Card = withError<IArticleProps &
{ className?: string, error?: { title: string, text: string } }
>(Article)

const LoadingArticle: FC<ILoadingArticleProps> = (props) => {
  const { uuid } = props
  const status = useSelector(getLoadingArticleStatus)
  const error = useSelector(getLoadingArticleError)
  const data = useSelector(getArticleProps)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArticle(uuid))
  }, [dispatch, uuid])

  if (status === 'request') {
    return (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} radius={50} />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.item} width={600} height={24} />
        <Skeleton className={styles.item} width="100%" height={200} />
        <Skeleton className={styles.item} width="100%" height={200} />
      </>
    )
  }

  if (data) {
    return (
    <div className={styles.loadingArticle}>
        <Card error={error} {...data} />
    </div>
    )
  }

  return null
}

export default memo<ILoadingArticleProps>(withReducers(LoadingArticle, reducers))
