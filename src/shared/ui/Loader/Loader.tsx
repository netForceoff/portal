import {FC, memo} from 'react';

interface IProps {
	className?: string;
}

const Loader: FC<IProps> = ({className}): JSX.Element => {
	return <div className={className}>Загрузка...</div>;
};

export default memo(Loader);
