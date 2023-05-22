import clsx from 'clsx'
import { FC, memo } from 'react'

import { IArticleCodeBlock } from '../../../../../ArticleList/model/types'

import { Code } from '@/shared/ui/Code'

// import styles from './ArticleCode.module.scss'

export interface IArticleCodeProps {
  className?: string
  block: IArticleCodeBlock
}
const ArticleCode: FC<IArticleCodeProps> = (props) => {
  const { className, block } = props

  return (
    <div className={clsx(className)}>
        <Code text={block.code} copyBtnText="Копировать" />
    </div>
  )
}

export default memo(ArticleCode)
