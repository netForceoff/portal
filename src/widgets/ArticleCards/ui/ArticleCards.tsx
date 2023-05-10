import { ArticleListCompact, ArticleListExtended, getArticleList, getArticleListStatus, getArticleListView } from '@/entities/ArticleList'
import { FC } from 'react'
import { useSelector } from 'react-redux'

export interface IArticleCardsProps {
  className?: string
}
const ArticleCards: FC<IArticleCardsProps> = (props) => {
  const status = useSelector(getArticleListStatus)
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)

  return view === 'table'
    ? <ArticleListCompact loading={status === 'request'} articles={articles} />
    : <ArticleListExtended loading={status === 'request'} articles={articles} />
}

export default ArticleCards
