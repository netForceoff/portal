import clsx from 'clsx';
import {FC, ReactNode, useCallback} from 'react';
import {useSelector} from 'react-redux';

import {
	getProfileState,
	getProfileStatus,
	getProfileError,
	getProfileReadOnly,
} from '../../model/selectors';
import {profileReducer, profileActions} from '../../model/slice';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';

import {useAppDispatch} from '@/app/providers/store';
import {ProfileCard, IProfileCardProps} from '@/entities/Profile';
import {withReducers} from '@/shared/lib';
import withError from '@/shared/lib/HOCS/withError';
import withLoader from '@/shared/lib/HOCS/withLoader';

import styles from './EditableProfileCard.module.scss';

const reducers = {
	profile: profileReducer,
};

interface IProps extends JSX.IntrinsicAttributes {
	id?: string;
}

const Card = withError<
	IProfileCardProps & {
		className?: string;
		error?: {title: string; text: string};
		isLoading: boolean;
	}
>(
	withLoader<IProfileCardProps & {className?: string; isLoading: boolean}>(
		ProfileCard
	)
);

const EditableProfileCard: FC<IProps> = ({id}): JSX.Element => {
	const dispatch = useAppDispatch();
	const profile = useSelector(getProfileState);
	const status = useSelector(getProfileStatus);
	const error = useSelector(getProfileError);
	const readOnly = useSelector(getProfileReadOnly);
	const isLoading = status === 'request';
	const CN = clsx({
		[styles.error]: status === 'error',
		[styles.loading]: isLoading,
	});

	const onChangeFirstName = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({key: 'first', value}));
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({key: 'lastname', value}));
		},
		[dispatch]
	);

	const renderHeader = (): ReactNode =>
		profile ? (
			<EditableProfileCardHeader id={id} readOnly={readOnly} />
		) : null;

	return (
		<>
			{renderHeader()}
			<Card
				error={error}
				className={CN}
				isLoading={status === 'request'}
				profile={profile}
				readOnly={readOnly}
				status={status}
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
			/>
		</>
	);
};

export default withReducers(EditableProfileCard, reducers);
