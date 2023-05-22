import { Rating } from '@/entities/Rating'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useRateArticle, useRating } from '../api'
import { useSelector } from 'react-redux'
import { getUser } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface IArticleRatingProps extends JSX.IntrinsicAttributes {
  id?: string
  className?: string
}

const rates = [1, 2, 3, 4, 5]

const ArticleRating: FC<IArticleRatingProps> = (props) => {
  const { id } = props
  const { t } = useTranslation('article')
  const user = useSelector(getUser)
  const { isLoading, data } = useRating({
    articleId: id || '',
    userId: user?.id || ''
  })

  const [rateArticleMutation] = useRateArticle()

  const handleClick = useCallback((rate: number, feedback?: string) => {
    rateArticleMutation({
      articleId: id || '',
      userId: user?.id || '',
      rate,
      feedback
    })
  }, [id, user?.id, rateArticleMutation])

  const onAccept = useCallback((rate: number, feedback?: string) => {
    handleClick(rate, feedback)
  }, [handleClick])

  const onCancel = useCallback((rate: number) => {
    handleClick(rate)
  }, [handleClick])

  if (isLoading) {
    return <Skeleton width="100%" height="50px" />
  }

  const rate = data?.at(-1)?.rate
  console.log(rate, 'rate')
  return (
    <Rating
      onAccept={onAccept}
      onCancel={onCancel}
      title={t('articleRateTitle')}
      rates={rates}
      feedbackTitle={t('feedbackTitle')}
      rate={rate}
    />
  )
}

export default ArticleRating
