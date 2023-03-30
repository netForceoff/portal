import { FC } from 'react'
import styles from './ArticlesPage.module.scss'

export interface IArticlesPageProps {
  className?: string
}
const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  return (
    <div className={styles.ArticlesPage}>
    </div>
  )
}

export default ArticlesPage
