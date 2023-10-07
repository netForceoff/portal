import clsx from 'clsx';
import {FC, memo} from 'react';

import {INotification} from '../../model/types';

import {Text} from '@/shared/ui/Text';

import styles from './Notification.module.scss';

export interface INotificationProps extends INotification {
	className?: string;
}
const Notification: FC<INotificationProps> = (props) => {
	const {className, title, description, href} = props;

	const content = (
		<div className={clsx(styles.notification, className)}>
			<Text title={title} text={description} />
		</div>
	);

	if (href) {
		return (
			<a
				className={styles.link}
				href={href}
				target="_blank"
				rel="noreferrer"
			>
				{content}
			</a>
		);
	}

	return content;
};

export default memo(Notification);
