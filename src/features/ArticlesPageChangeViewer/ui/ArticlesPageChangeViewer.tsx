import { useAppDispatch } from 'app/providers/store'
import { articleListActions } from 'entities/ArticleList'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export interface IArticlesPageChangeViewerProps {
  className?: string
}
const ArticlesPageChangeViewer: FC<IArticlesPageChangeViewerProps> = (props) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()

  const handleClickTable = useCallback(() => {
    dispatch(articleListActions.setView('table'))
  }, [dispatch])

  const handleLickList = useCallback(() => {
    dispatch(articleListActions.setView('list'))
  }, [dispatch])

  return (
    <>
        <Button onClick={handleClickTable}>{t('view.table')}</Button>
        <Button onClick={handleLickList}>{t('view.list')}</Button>
    </>
  )
}

export default ArticlesPageChangeViewer
