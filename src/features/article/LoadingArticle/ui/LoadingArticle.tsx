import { Article, IArticleProps } from 'entities/Article'
import { FC, memo } from 'react'
import styles from './LoadingArticle.module.scss'
import { useSelector } from 'react-redux'
import { getArticleError, getArticleStatus, getArticleProps } from '../model/selectors'
import withError from 'shared/lib/HOCS/withError'
import Skeleton from 'shared/ui/Skeleton/Skeleton'

export interface ILoadingArticleProps extends JSX.IntrinsicAttributes {

}

const Card = withError<IArticleProps &
{ className?: string, error?: { title: string, text: string } }
>(Article)
// TODO - возможно стоило утащить на уровень widgets или вообще оставить в enteties, т.к. статья это одна сущность и вряд ли будет переиспользоваться
// Модули также стоит перетащить в другое место
const LoadingArticle: FC<ILoadingArticleProps> = (props) => {
  const status = useSelector(getArticleStatus)
  const error = useSelector(getArticleError)
  const data = useSelector(getArticleProps)
  console.log(data, 'data')
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

  return (
    <div className={styles.loadingArticle}>
        <Card error={error} article={data} />
    </div>
  )
}

export default memo<ILoadingArticleProps>(LoadingArticle)
