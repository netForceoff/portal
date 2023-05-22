import { FC, memo, ReactNode } from 'react'
import { Text } from '@/shared/ui/Text'
import { Flex } from '@/shared/ui/Flex'
import { Skeleton } from '@/shared/ui/Skeleton'
import styles from './Article.module.scss'
import ArticleCode from './ArticleCode/ui/ArticleCode'
import ArticleImage from './ArticleImage/ArticleImage'
import ArticleText from './ArticleText/ArticleText'
import { IArticle, IArticleBlock, IArticleBlockType } from '../../model/types'

export interface IArticleProps {
  article?: IArticle
  loading: boolean
}

const Article: FC<IArticleProps> = (props) => {
  const { article, loading } = props
  // TODO - все таки надо утащить на уровень widget
  if (loading) {
    return (
      <>
        <Skeleton className={styles.sceletonAvatar} width={200} height={200} radius={50} />
        <Skeleton className={styles.sceletonTitle} width={300} height={32} />
        <Skeleton className={styles.sceletonItem} width={600} height={24} />
        <Skeleton className={styles.sceletonItem} width="100%" height={200} />
        <Skeleton className={styles.sceletonItem} width="100%" height={200} />
      </>
    )
  }

  if (article) {
    const { img, blocks, id, subtitle, title, views, createdAt } = article

    const renderBlock = (block: IArticleBlock): ReactNode => {
      switch (block.type) {
        case IArticleBlockType.CODE:
          return <ArticleCode key={id} className={styles.block} block={block} />
        case IArticleBlockType.IMAGE:
          return <ArticleImage key={id} className={styles.block} block={block} />
        case IArticleBlockType.TEXT:
          return <ArticleText key={id} className={styles.block} block={block} />
        default:
          return null
      }
    }

    return (
    <div className={styles.Article}>
      <Flex justify='center'>
      <img alt="Img" src={img} className={styles.avatar} />
      </Flex>
      <Text className={styles.title} title={title} text={subtitle} size="l" />
      <Flex align='center'>
        <Text text={String(views)} />
      </Flex>
      <div className={styles.info}>
        <Text text={String(createdAt)} />
      </div>
      {blocks.map(renderBlock)}
    </div>
    )
  }

  return null
}

export default memo(Article)
