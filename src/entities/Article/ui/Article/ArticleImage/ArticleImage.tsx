import clsx from 'clsx'
import { IArticleImageBlock } from '../../../../ArticleList/model/types'
import { FC, memo, ReactNode } from 'react'
import { Text } from 'shared/ui'
import styles from './ArticleImage.module.scss'

export interface IArticleImageProps {
  className?: string
  block: IArticleImageBlock
}
const ArticleImage: FC<IArticleImageProps> = (props) => {
  const { className, block } = props

  const renderTitle = (): ReactNode => block.title ? <Text text={block.title} align="center" /> : null

  return (
    <div className={clsx(styles.container, className)}>
      <img className={styles.img} src={block.src} alt={block.title} />
      {renderTitle()}
    </div>
  )
}

export default memo(ArticleImage)
