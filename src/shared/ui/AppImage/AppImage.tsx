import { FC, ImgHTMLAttributes, useState, useLayoutEffect, ReactElement } from 'react'

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
}
const AppImage: FC<IImageProps> = (props) => {
  const { alt = 'image', className, src, errorFallback, fallback, ...otherProps } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src || ''

    img.onload = () => {
      setIsLoading(false)
    }

    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return <img {...otherProps} alt={alt} className={className} src={src} />
}

export default AppImage
