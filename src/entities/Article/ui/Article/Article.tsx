import { FC, memo, ReactNode } from 'react'
import { Text } from 'shared/ui'
import { IArticle, IArticleBlock, IArticleBlockType } from '../../../ArticleList/model/types'
import styles from './Article.module.scss'
import ArticleCode from './ArticleCode/ui/ArticleCode'
import ArticleImage from './ArticleImage/ArticleImage'
import ArticleText from './ArticleText/ArticleText'

export interface IArticleProps {
  article?: IArticle
}

const Article: FC<IArticleProps> = (props) => {
  const { article } = props

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
      <div className={styles.avatarWrapper}>
      <img alt="Img" src={img} className={styles.avatar} />
      </div>
      <Text className={styles.title} title={title} text={subtitle} size="l" />
      <div className={styles.info}>
        <Text text={String(views)} />
      </div>
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
