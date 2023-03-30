import { LoadingArticle } from 'features/LoadingArticle'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import styles from './ArticlePage.module.scss'

export interface IArticlePageProps {
  className?: string
}

const ArticlePage: FC<IArticlePageProps> = (props) => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')

  if (id) {
    return (
      <div className={styles.ArticlePage}>
          <LoadingArticle uuid={id} />
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
