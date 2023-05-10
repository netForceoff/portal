import { AnimationEvent, FC, ReactNode, useState, memo } from 'react'
import clsx from 'clsx'
import styles from './Modal.module.scss'
import { createPortal } from 'react-dom'
import { MousedownWrapper, KeydownWrapper } from '@/shared/lib'
import Overlay from '../Overlay/Overlay'

interface IProps {
  className?: string
  children: ReactNode
  onCloseOutside: () => void
}

const CODES = ['Escape']
// TODO попробовать через Renderless подход
const Modal: FC<IProps> = ({ className, children, onCloseOutside }): JSX.Element | null => {
  const [useAnimationOut, setUseAnimationOut] = useState(false)
  const contentCN = clsx(styles.content, {
    [styles.animationOut]: useAnimationOut
  })

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>): void => {
    if (event.animationName === styles.out) {
      onCloseOutside()
    }
  }

  const handleCloseOutside = (): void => {
    setUseAnimationOut(true)
  }

  return createPortal(
    <KeydownWrapper codes={CODES} callback={handleCloseOutside}>
      <Overlay className={className}>
        <MousedownWrapper callback={handleCloseOutside}>
          <div className={contentCN} onAnimationEnd={handleAnimationEnd}>
            {children}
          </div>
        </MousedownWrapper>
      </Overlay>
    </KeydownWrapper>,
    document.body
  )
}

export default memo(Modal)
