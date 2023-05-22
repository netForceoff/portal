import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { articleReducer } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import withReducers from '@/shared/lib/HOCS/withReducers'
import { ArticleCard } from '@/widgets/ArticleCard'
import { ArticleComments, articleCommentsReducer } from '@/widgets/ArticleComments'

export interface IArticlePageProps extends JSX.IntrinsicAttributes {
  className?: string
}

const reducers = {
  article: articleReducer,
  articleComments: articleCommentsReducer
}

const ArticlePage: FC<IArticlePageProps> = (props) => {
  const { id } = useParams<{ id: string }>()

  return (
    <section>
        <ArticleCard id={id} />
        <ArticleRating id={id} />
        <ArticleComments id ={id} />
    </section>
  )
}

export default withReducers(ArticlePage, reducers)
