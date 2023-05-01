import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleComments, articleCommentsReducer } from 'widgets/ArticleComments'
import { articleReducer } from 'entities/Article'
import { ArticleCard } from 'widgets/ArticleCard'
import withReducers from 'shared/lib/HOCS/withReducers'

export interface IArticlePageProps extends JSX.IntrinsicAttributes {
  className?: string
}

const reducers = {
  article: articleReducer,
  articleComments: articleCommentsReducer
}

const ArticlePage: FC<IArticlePageProps> = (props) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')

  if (id) {
    return (
      <section>
          <ArticleCard id={id} />
          <ArticleComments id ={id} />
      </section>
    )
  }

  return (
    <section>
       {t('nothingFound')}
    </section>
  )
}

export default withReducers(ArticlePage, reducers)
