import { FC, memo } from 'react'
import styles from './Text.module.scss'
import clsx from 'clsx'

type ColorType = 'error' | 'default'

type Align = 'left' | 'center' | 'right'

interface IProps {
  align?: Align
  className?: string
  title?: string
  text?: string
  colorType?: ColorType
}

const Text: FC<IProps> = (props): JSX.Element => {
  const { align = 'left', className, title, text, colorType = 'default' } = props

  return (
        <div className={clsx(className, styles[colorType], styles[align])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
  )
}

export default memo(Text)
