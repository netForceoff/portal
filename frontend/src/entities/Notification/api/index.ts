import {INotification} from '../model/types';

import {rtkApi} from '@/shared/api/query';
import i18n from '@/shared/config/i18n';

export const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<INotification[], undefined>({
			query: () => ({
				url: '/notifications/',
			}),
			transformErrorResponse: (
				response: {status: string | number},
				meta,
				arg
			) => {
				return {
					title: i18n.t('errors.loading'),
					text: i18n.t('errors.loading'),
				};
			},
		}),
	}),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
