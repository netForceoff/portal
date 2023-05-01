import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Flex.module.scss'

type FlexDirection = 'row' | 'column'

type FlexAlign = 'center' | 'end' | 'start'

type FlexJustify = 'start' | 'end' | 'around' | 'between' | 'center'

export interface IFlexProps {
  className?: string
  children: ReactNode
  direction?: FlexDirection
  align?: FlexAlign
  justify?: FlexJustify
}

const Flex: FC<IFlexProps> = (props) => {
  const { className, children, direction, align, justify } = props

  const CN = clsx(
    {
      [styles.flex]: true,
      [className || '']: Boolean(className),
      [styles[`direction_${direction || ''}`]]: Boolean(direction),
      [styles[`align_${align || ''}`]]: Boolean(align),
      [styles[`justify_${justify || ''}`]]: Boolean(justify)
    }
  )

  return (
    <div className={CN}>
        {children}
    </div>
  )
}

export default Flex
