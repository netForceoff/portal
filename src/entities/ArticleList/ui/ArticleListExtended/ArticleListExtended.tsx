import clsx from 'clsx'
import { FC } from 'react'

import { IArticle } from '../../model/types'

import { Text } from '@/shared/ui'
import { Skeleton } from '@/shared/ui/Skeleton'

import styles from './ArticleListExtended.module.scss'

export interface IArticleListExtendedProps {
  className?: string
  loading: boolean
  articles: IArticle[]
}
const ArticleListExtended: FC<IArticleListExtendedProps> = (props) => {
  const { articles, loading, className } = props

  const renderList = () => articles.map(article => {
    return (
          <div key={article.id} className={clsx(styles.articleListCompact)}>
              <div className={styles.img}></div>
              <Text title={article.title} />
              <Text title={article.subtitle} />
          </div>
    )
  })

  const renderLoading = () => {
    if (loading) {
      return (
          <>
            <Skeleton width="100%" height="500px" />
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

export default ArticleListExtended
