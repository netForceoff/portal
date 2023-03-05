import { FC } from 'react'
import styles from './Text.module.scss'

type ColorType = 'error' | 'default'

interface IProps {
  title?: string
  text?: string
  colorType?: ColorType
}

const Text: FC<IProps> = (props): JSX.Element => {
  const { title, text, colorType = 'default' } = props

  return (
        <div className={styles[colorType]}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
  )
}

export default Text
