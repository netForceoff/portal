import { Popover as HPopover } from '@headlessui/react'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Popover.module.scss'

interface IPopoverProps {
  className?: string
  buttonContent: ReactNode
  children: ReactNode
}

const Popover: FC<IPopoverProps> = (props) => {
  const { className, buttonContent, children } = props
  return (
    <HPopover className={clsx(styles.popover, className)}>
      <HPopover.Button>{buttonContent}</HPopover.Button>
      <HPopover.Panel unmount={false} className={styles.panel}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}

export default Popover
