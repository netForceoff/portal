import clsx from 'clsx'
import { IArticle } from '../../model/types'
import { FC } from 'react'
import { Text } from 'shared/ui'
import styles from './ArticleListCompact.module.scss'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { VirtuosoGrid } from 'react-virtuoso'

export interface IArticleListCompactProps {
  className?: string
  loading: boolean
  article: IArticle
}

const ItemContainer = () => <div className={styles.itemContainer}></div>

const ItemWrapper = () => <div className={clsx(styles.itemWrapper)} />

const ListContainer = () => <div className={clsx(styles.listContainer)} />

const ArticleListCompact: FC<IArticleListCompactProps> = (props) => {
  const { article, loading, className } = props

  return (
    <div key={article.id} className={clsx(styles.articleListCompact)}>
        <div className={styles.img}></div>
        <Text title={article.title} />
    </div>
  )

  const renderItem = (article) => {

  }

  // const renderList = () => articles.map(article => {

  // })

  // const renderLoading = () => {
  //   if (loading) {
  //     return (
  //       <>
  //         <Skeleton width="200px" height="200px" />
  //         <Skeleton width="200px" height="200px" />
  //         <Skeleton width="200px" height="200px" />
  //       </>
  //     )
  //   }
  // }

  const renderContent = () => {
    return (
      <>
        {renderList()}
        {renderLoading()}
      </>
    )
  }

  return (
    <VirtuosoGrid
    style={{ height: 400 }}
    components={{
      Item: () => {
        return <p></p>
      },
      List: () => {
        return <p></p>
      }
    }}
    totalCount={10000}

    data={articles}
    itemContent={(index, article) => {
      return <div>{index}</div>
    }}
  />

  // <div className={clsx(styles.container, className)}>

  // </div>
  )
}

export default ArticleListCompact
