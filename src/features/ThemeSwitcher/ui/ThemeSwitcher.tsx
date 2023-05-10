import { useTheme } from '@/entities/theme'
import { memo } from 'react'
import Icon from '@/shared/assets/icons/theme.svg'
import { Button, ButtonColor, ButtonVariant } from '@/shared/ui'

const ThemeSwitcher = (): JSX.Element => {
  const { toggle } = useTheme()

  return (
    <Button variant={ButtonVariant.CLEAR} color={ButtonColor.PRIMARY_INVERTED} onClick={toggle}><Icon /></Button>
  )
}

export default memo(ThemeSwitcher)
