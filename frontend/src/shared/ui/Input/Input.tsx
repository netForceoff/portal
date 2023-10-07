import {FC, InputHTMLAttributes, memo, ChangeEvent} from 'react';

interface IProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange?: (value: string) => void;
	className?: string;
	testId?: string;
}

const Input: FC<IProps> = (props): JSX.Element => {
	const {className, onChange, testId, ...otherProps} = props;

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		onChange?.(event.target.value);
	};

	const inputProps = {
		...otherProps,
		...(testId && {'data-testid': `${testId}_Input`}),
	};

	return (
		<input {...inputProps} onChange={handleChange} className={className} />
	);
};

export default memo(Input);
