import { StateSchema } from 'app/providers/store'
import { getUser } from 'entities/User'
import { RoutePath } from 'shared/config/router'
import List from 'shared/assets/icons/list.svg'
import i18n from 'shared/config/i18n'
import House from 'shared/assets/icons/house.svg'
import Profile from 'shared/assets/icons/profile.svg'

export const getSidebarLinks = (state: StateSchema): Array<{ path: string, Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>, text: string }> => {
  const user = getUser(state)

  const links = [{
    path: RoutePath.about,
    Icon: List,
    text: i18n.t('links.about')
  },
  {
    path: RoutePath['/'],
    Icon: House,
    text: i18n.t('links.main')
  }]

  if (user) {
    links.push({
      path: RoutePath.profile + user.id,
      Icon: Profile,
      text: i18n.t('links.profile')
    },
    {
      path: RoutePath.articles,
      Icon: Profile,
      text: 'Статьи'
    })
  }

  return links
}
