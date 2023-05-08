import clsx from 'clsx'
import { FC, SVGProps } from 'react'
import styles from './Icon.module.scss'

export interface IIconProps {
  className?: string
  SVG: FC<SVGProps<SVGSVGElement>>
  inverted?: boolean
}
const Icon: FC<IIconProps> = (props) => {
  const { className, SVG, inverted } = props

  const CN = clsx(styles.Icon, className, {
    [styles.inverted]: inverted
  })

  return <SVG className={CN} />
}

export default Icon
