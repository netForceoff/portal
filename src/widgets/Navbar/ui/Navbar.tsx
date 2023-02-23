import clsx from 'clsx'
import { type FC } from 'react'
import styles from './Navbar.module.scss'

interface IProps {
  className?: string
}

const Navbar: FC<IProps> = ({ className }) => {
  return (
        <div className={clsx(styles.navbar, className)}>
        </div>
  )
}

export default Navbar
