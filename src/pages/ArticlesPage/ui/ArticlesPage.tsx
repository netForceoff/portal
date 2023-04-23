import { FC, useEffect, useCallback, useRef } from 'react'
// import styles from './ArticlesPage.module.scss'
import { withReducers } from 'shared/lib'
import { useAppDispatch } from 'app/providers/store'
import { useSelector } from 'react-redux'
import { Error } from 'entities/Error'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Layout } from 'widgets/Layout'
import InfinityScrollWrapper from 'shared/lib/wrappers/InfinityScrollWrapper'
import { SaveScrollPosition } from 'features/SaveScrollPosition'
import { ArticlesPageFilters } from 'features/ArticlesPageFilters'
import { articleListActions, ArticleListCompact, ArticleListExtended, articleListReducer, getArticleList, getArticleListError, getArticleListStatus, getArticleListView, getArticlesMore, initArticles } from 'entities/ArticleList'
import { useSearchParams } from 'react-router-dom'
import { Virtuoso } from 'react-virtuoso'

const reducers = {
  articles: articleListReducer
}

export interface IArticlesPageProps extends JSX.IntrinsicAttributes {
  className?: string
}

// TODO кнопки для переключения вида нужно вынести на уровень фичи,
const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const status = useSelector(getArticleListStatus)
  const error = useSelector(getArticleListError)
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)
  const { t } = useTranslation('articles')
  const triggerRef = useRef<HTMLDivElement>(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(initArticles(searchParams))
  }, [dispatch])

  const handleClickTable = useCallback(() => {
    dispatch(articleListActions.setView('table'))
  }, [dispatch])

  const handleLickList = useCallback(() => {
    dispatch(articleListActions.setView('list'))
  }, [dispatch])

  const handleUpdate = useCallback(() => {
    dispatch(getArticlesMore())
  }, [dispatch])

  if (error) {
    return <Error title={error.title} text={error.text} />
  }

  const renderHeader = () => {
    return (
      <>
      <ArticlesPageFilters />
      <Button onClick={handleClickTable}>{t('view.table')}</Button>
      <Button onClick={handleLickList}>{t('view.list')}</Button>
      </>
    )
  }

  const renderItemWrapper = () => <div style={{ width: '100%', height: '100%' }}></div>

  const renderList = () => view === 'table' ? <ArticleListCompact loading={status === 'request'} article={article} /> : <ArticleListExtended loading={status === 'request'} articles={articles} />
  console.log(articles, 'articles')
  return (
    <Layout>
      {(ref) => (
        <Virtuoso
        components={{
          Header: renderHeader
        }}
        // scrollerRef={ref}
        style={{ height: '100%' }}
        data={articles}
        itemContent={(index, article) => {
          console.log(article, 'article')

          return <ArticleListExtended loading={status === 'request'} article={article} />
        }
      }
      />
      )}

    </Layout>
  )
}

export default withReducers(ArticlesPage, reducers, false)
