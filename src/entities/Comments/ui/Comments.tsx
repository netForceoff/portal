import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { IComment } from '../model/types'
import styles from './Comments.module.scss'
import Comment from '../ui/Comment/Comment'

export interface ICommentsProps extends JSX.IntrinsicAttributes {
  className?: string
  comments: IComment[]
}
const Comments: FC<ICommentsProps> = (props) => {
  const { className, comments } = props

  const renderComments = (): ReactNode[] => comments.map((comment: IComment) => {
    return <Comment key={comment.id} {...comment} />
  })

  return (
    <div className={clsx(styles.comments, className)}>
        {renderComments()}
    </div>
  )
}

export default Comments
