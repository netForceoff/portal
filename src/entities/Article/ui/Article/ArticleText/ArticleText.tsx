import clsx from 'clsx'
import { IArticleTextBlock } from '../../../../ArticleList/model/types'
import { FC, memo, ReactNode } from 'react'
import { Text } from 'shared/ui'
import styles from './ArticleText.module.scss'

export interface IArticleTextProps {
  className: string
  block: IArticleTextBlock
}

const ArticleText: FC<IArticleTextProps> = (props) => {
  const { className, block } = props
  const { title, paragraphs } = block

  const renderTitle = (): ReactNode => {
    return title ? <Text title={title} className={styles.title} /> : null
  }

  const renderParagraphs = (): ReactNode => {
    return paragraphs.map(paragraph => <Text size="m" key={paragraph} text={paragraph} className={styles.paragraph} />)
  }

  return (
    <div className={clsx(styles.ArticleText, className)}>
        {renderTitle()}
        {renderParagraphs()}
    </div>
  )
}

export default memo(ArticleText)
