import {StateSchema} from '@/app/providers/store';
import {getUser} from '@/entities/User';
import House from '@/shared/assets/icons/house.svg';
import List from '@/shared/assets/icons/list.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import i18n from '@/shared/config/i18n';
import {
	getRouteProfile,
	getRouteAbout,
	getRouteMain,
	getRouteArticles,
} from '@/shared/config/router';

export const getSidebarLinks = (
	state: StateSchema
): Array<{
	path: string;
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	text: string;
}> => {
	const user = getUser(state);

	const links = [
		{
			path: getRouteAbout(),
			Icon: List,
			text: i18n.t('links.about'),
		},
		{
			path: getRouteMain(),
			Icon: House,
			text: i18n.t('links.main'),
		},
	];

	if (user) {
		links.push(
			{
				path: getRouteProfile(user.id),
				Icon: Profile,
				text: i18n.t('links.profile'),
			},
			{
				path: getRouteArticles(''),
				Icon: Profile,
				text: 'Статьи',
			}
		);
	}

	return links;
};
