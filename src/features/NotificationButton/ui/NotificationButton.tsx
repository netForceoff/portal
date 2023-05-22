import { NotificationList } from '@/entities/Notification'
import { FC, memo } from 'react'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'
import styles from './NotificationButton.module.scss'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import useTouchEvent from '@/shared/lib/hooks/useTouchEvent'

// export interface INotificationButtonProps {
//   className?: string
// }
const NotificationButton: FC = () => {
  const isTouch = useTouchEvent()

  return (
    !isTouch
      ? <Popover className={styles.notification}
    buttonContent={(
      <Icon SVG={NotificationIcon} />
    )}
  >
    <NotificationList className={styles.notifications} />
  </Popover>
      : null
  )
}

export default memo(NotificationButton)
