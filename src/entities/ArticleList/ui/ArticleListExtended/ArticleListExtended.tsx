import clsx from 'clsx'
import { FC } from 'react'
import styles from './ArticleListExtended.module.scss'
import { IArticle } from '../../model/types'
import { Text } from 'shared/ui'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { Virtuoso } from 'react-virtuoso'

export interface IArticleListExtendedProps {
  className?: string
  loading: boolean
  article: IArticle
}
const ArticleListExtended: FC<IArticleListExtendedProps> = (props) => {
  const { article, loading, className } = props

  const renderLoading = () => {
    if (loading) {
      return (
          <>
            <Skeleton width="100%" height="500px" />
          </>
      )
    }

    return null
  }

  return (
    <>
    <div key={article.id} className={clsx(styles.articleListCompact)}>
        <div className={styles.img}></div>
        <Text title={article.title} />
        <Text title={article.subtitle} />
    </div>
    {renderLoading()}
    </>
  )

  const renderList = (article) => {

  }

  // const renderLoading = () => {
  //   if (loading) {
  //     return (
  //         <>
  //           <Skeleton width="100%" height="500px" />
  //         </>
  //     )
  //   }
  // }

  return (
      <div className={clsx(styles.container, className)}>
    <Virtuoso
      style={{ height: '100vh' }}
      data={articles}
      itemContent={(index, article) => (
        <>
        { renderList(article)}
        {renderLoading()}
        </>
      )}
    />
      </div>
  )
}

export default ArticleListExtended
