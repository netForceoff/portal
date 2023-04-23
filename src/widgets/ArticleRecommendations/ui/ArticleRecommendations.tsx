import { ArticleListCompact } from 'entities/ArticleList'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getArticleRecommendationsStatus } from '../model/selectors'
import { getArticleRecommendationsSelector } from '../model/slice'

export interface IRecommendationsProps {
  className?: string
}
const ArticleRecommendations: FC<IRecommendationsProps> = (props) => {
  const status = useSelector(getArticleRecommendationsStatus)
  const articles = useSelector(getArticleRecommendationsSelector.selectAll)

  return <ArticleListCompact articles={articles} loading={status === 'request'} />
}

export default ArticleRecommendations
