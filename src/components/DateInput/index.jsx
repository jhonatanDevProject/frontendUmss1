import { DateInput as BaseDateInput } from '@mantine/dates';

export const DateInput = (props) => {
	return (
		<BaseDateInput
			valueFormat="DD/MM/YYYY"
			label={props.label}
			placeholder="__/__/____"
			maw={400}
			mx="auto"
			{...props}
		/>
	);
};
