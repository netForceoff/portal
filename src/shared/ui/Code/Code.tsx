import clsx from 'clsx'
import { FC, memo } from 'react'

import Button, { ButtonColor, ButtonVariant } from '../Button/Button'

import styles from './Code.module.scss'

export interface ICodeProps {
  className?: string
  text: string
  copyBtnText: string
}

// TODO - нормально ли в shared использовать компоненты из этого же слоя?
const Code: FC<ICodeProps> = (props) => {
  const { className, text, copyBtnText } = props

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text)
  }

  return (
    <pre className={clsx(styles.code, className)}>
      <Button onClick={handleCopy} color={ButtonColor.PRIMARY_INVERTED} variant={ButtonVariant.FILLED_INVERTED} className={styles.copyBtn}>{copyBtnText}</Button>
        <code>
            {text}
        </code>
    </pre>
  )
}

export default memo(Code)
