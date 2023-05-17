import { useTranslation } from 'react-i18next'
import { Layout } from '@/widgets/Layout'
import StarRating from '@/shared/ui/StarRating/StarRating'
import { useMemo } from 'react'
import { Rating } from '@/entities/Rating'

const stars = [1, 2, 3, 4, 5]

const Main = (): JSX.Element => {
  const { t } = useTranslation('main')

  return (
      <Layout>
        {/* ДИЧЬ */}
        {() => (
          <>
            {t('page.main')}
            <Rating title='Как вам статья' feedbackTitle='Оставьте отзыв о статье' rates={stars} />
        </>
        )}
      </Layout>
  )
}

export default Main
