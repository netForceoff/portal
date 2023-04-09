import { FC, useEffect, useCallback } from 'react'
// import styles from './ArticlesPage.module.scss'
import { ArticleListCompact, ArticleListExtended } from 'entities/Article'
import { articleListActions, articleListReducer, getArticleList } from '../models/slice'
import { withReducers } from 'shared/lib'
import { useAppDispatch } from 'app/providers/store'
import { getArticles } from '../models/service'
import { useSelector } from 'react-redux'
import { getArticleListError, getArticleListStatus, getArticleListView } from '../models/selectors'
import { Error } from 'entities/Error'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

const reducers = {
  articles: articleListReducer
}

export interface IArticlesPageProps extends JSX.IntrinsicAttributes {
  className?: string
}

// TODO кнопки для переключения вида нужно вынести на уровень фичи,
// видимо редюсер будет на уровне entities, т.к. вид статей будет там и вид надо переключать в этом редьюсере
const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const status = useSelector(getArticleListStatus)
  const error = useSelector(getArticleListError)
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)
  const { t } = useTranslation('articles')

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  const handleClickTable = useCallback(() => {
    console.log('HREE')
    dispatch(articleListActions.setView('table'))
  }, [dispatch])

  const handleLickList = useCallback(() => {
    dispatch(articleListActions.setView('list'))
  }, [dispatch])

  if (error) {
    return <Error title={error.title} text={error.text} />
  }

  const renderList = () => view === 'table' ? <ArticleListCompact loading={status === 'request'} articles={articles} /> : <ArticleListExtended loading={status === 'request'} articles={articles} />

  return (
    <section>
      <Button onClick={handleClickTable}>{t('view.table')}</Button>
      <Button onClick={handleLickList}>{t('view.list')}</Button>
     {renderList()}
    </section>
  )
}

export default withReducers(ArticlesPage, reducers)
