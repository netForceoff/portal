import clsx from 'clsx'
import { CSSProperties, FC, ImgHTMLAttributes, memo, useMemo } from 'react'

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

  return (
        <img
            {...otherProps}
            className={clsx(styles.avatar, className)}
            src={src}
            style={inlineStyles}
        />
  )
}

export default memo(Avatar)
