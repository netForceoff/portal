import { getArticle, LoadingArticle, articleReducer } from 'features/article/LoadingArticle'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
// import styles from './ArticlePage.module.scss'
import { useAppDispatch } from 'app/providers/store'
import { ArticleComments, getComments, articleCommentsReducer } from 'features/article/ArticleComments'
import { ArticleRecommendations, articleRecommendationsReducer, getRecommendations } from 'widgets/ArticleRecommendations'
import { withReducers } from 'shared/lib'

export interface IArticlePageProps extends JSX.IntrinsicAttributes {
  className?: string
}

const reducers = {
  articleComments: articleCommentsReducer,
  article: articleReducer,
  articleRecommendations: articleRecommendationsReducer
}

const ArticlePage: FC<IArticlePageProps> = (props) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArticle(id))
    dispatch(getRecommendations(id))
    dispatch(getComments(id))
  }, [dispatch, id])

  if (id) {
    return (
      <section>
          <LoadingArticle />
          <ArticleRecommendations />
          <ArticleComments />
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
