import {FC} from 'react';

import {useNotifications} from '../../api';
import Notification from '../Notification/Notification';

import {Flex} from '@/shared/ui/Flex';
import {Skeleton} from '@/shared/ui/Skeleton';

export interface INotificationListProps {
	className?: string;
}
const NotificationList: FC<INotificationListProps> = (props) => {
	const {className} = props;
	const {data: notifications, isLoading} = useNotifications(undefined, {
		pollingInterval: 10000,
	});

	if (isLoading) {
		return (
			<Flex
				align="start"
				className={className}
				direction="column"
				gap="16"
			>
				<Skeleton width="100%" radius={8} height="80px" />
				<Skeleton width="100%" radius={8} height="80px" />
				<Skeleton width="100%" radius={8} height="80px" />
			</Flex>
		);
	}

	return notifications ? (
		<Flex align="start" className={className} direction="column" gap="16">
			{notifications.map((notifcation) => {
				return <Notification key={notifcation.id} {...notifcation} />;
			})}
		</Flex>
	) : null;
};

export default NotificationList;
