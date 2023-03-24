import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ArticlesPage.module.scss'

export interface IArticlesPageProps {

}
const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const { t } = useTranslation()

  return (
    <div className={styles.ArticlesPage}>
        ARTCIELS
    </div>
  )
}

export default ArticlesPage
