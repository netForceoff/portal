import clsx from 'clsx'
import { CSSProperties, FC } from 'react'

import styles from './Skeleton.module.scss'

export interface ISkeletonProps {
  className?: string
  width?: number | string
  height?: number | string
  radius?: number
}
const Skeleton: FC<ISkeletonProps> = (props) => {
  const { className, height, width, radius } = props

  const inlineStyles: CSSProperties = {
    width,
    height,
    borderRadius: `${radius || 0}%`
  }

  return <div style={inlineStyles} className={clsx([styles.skeleton, className])} />
}

export default Skeleton
