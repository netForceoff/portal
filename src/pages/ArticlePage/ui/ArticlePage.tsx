import { getArticle, LoadingArticle } from 'features/article/LoadingArticle'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import styles from './ArticlePage.module.scss'
import { useAppDispatch } from 'app/providers/store'
import { ArticleComments, getComments } from 'features/article/ArticleComments'

export interface IArticlePageProps {
  className?: string
}

const ArticlePage: FC<IArticlePageProps> = (props) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getArticle(id))
    dispatch(getComments(id))
  }, [dispatch, id])

  if (id) {
    return (
      <div className={styles.ArticlePage}>
          <LoadingArticle />
          <ArticleComments />
      </div>
    )
  }

  return (
    <div className={styles.ArticlePage}>
       {t('nothingFound')}
    </div>
  )
}

export default ArticlePage
