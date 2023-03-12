import House from 'shared/assets/icons/house.svg'
import List from 'shared/assets/icons/list.svg'
import Profile from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/router'
import i18n from 'shared/config/i18n'

export const Links = [{
  path: RoutePath.about,
  Icon: List,
  text: i18n.t('links.about')
},
{
  path: RoutePath['/'],
  Icon: House,
  text: i18n.t('links.main')
},
{
  path: RoutePath.profile,
  Icon: Profile,
  text: i18n.t('links.profile')
}]
