import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ArticleDetailsPage.module.scss'

export interface IArticleDetailsPageProps {

}
const ArticleDetailsPage: FC<IArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation('article')

  return (
    <div className={styles.ArticleDetailsPage}>
        ARTICLE DETAILS
    </div>
  )
}

export default ArticleDetailsPage
