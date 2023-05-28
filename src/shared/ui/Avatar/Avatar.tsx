import clsx from 'clsx'
import { CSSProperties, FC, ImgHTMLAttributes, memo, useMemo } from 'react'

import AppImage from '../AppImage/AppImage'
import { Skeleton } from '../Skeleton'

import styles from './Avatar.module.scss'

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src: string
  size?: number
}

const Avatar: FC<IProps> = ({ src, className, size, ...otherProps }): JSX.Element => {
  const inlineStyles = useMemo<CSSProperties>(() => {
    return {
      width: `${size || 100}px`,
      height: `${size || 100}px`
    }
  }, [size])

  const fallback = <Skeleton {...inlineStyles} radius={50} />

  return (
        <AppImage
            {...otherProps}
            fallback={fallback}
            className={clsx(styles.avatar, className)}
            src={src}
            style={inlineStyles}
        />
  )
}

export default memo(Avatar)
