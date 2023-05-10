import clsx from 'clsx'
import { IArticle } from '../../model/types'
import { FC } from 'react'
import { Text } from '@/shared/ui'
import styles from './ArticleListCompact.module.scss'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

export interface IArticleListCompactProps {
  className?: string
  loading: boolean
  articles: IArticle[]
}

const ArticleListCompact: FC<IArticleListCompactProps> = (props) => {
  const { articles, loading, className } = props

  const renderList = () => articles.map(article => {
    return (
        <div key={article.id} className={clsx(styles.articleListCompact)}>
            <div className={styles.img}></div>
            <Text title={article.title} />
        </div>
    )
  })

  const renderLoading = () => {
    if (loading) {
      return (
        <>
          <Skeleton width="200px" height="200px" />
          <Skeleton width="200px" height="200px" />
          <Skeleton width="200px" height="200px" />
        </>
      )
    }
  }

  return (
    <div className={clsx(styles.container, className)}>
        {renderList()}
        {renderLoading()}
    </div>
  )
}

export default ArticleListCompact
