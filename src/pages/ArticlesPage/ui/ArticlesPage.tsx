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

  const renderList = () => view === 'table' ? <ArticleListCompact loading={status === 'request'} articles={articles} /> : <ArticleListExtended loading={status === 'request'} articles={articles} />

  return (
    <Layout>
      {(ref) => {
        return (
          <>
          <SaveScrollPosition containerRef={ref}>
          <InfinityScrollWrapper wrapperRef={ref} triggerRef={triggerRef} callback={handleUpdate}>
            <ArticlesPageFilters />
            <Button onClick={handleClickTable}>{t('view.table')}</Button>
            <Button onClick={handleLickList}>{t('view.list')}</Button>
            {renderList()}
          </InfinityScrollWrapper>
            <div ref={triggerRef} />
            </SaveScrollPosition>
          </>
        )
      }}
    </Layout>
  )
}

export default withReducers(ArticlesPage, reducers, false)
