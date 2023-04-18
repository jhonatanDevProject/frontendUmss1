// import {} from 'react';
import { Paper, Text, Title, Divider } from '@mantine/core';

export const Jumbotron = (props) => {
	const { title, subtitle } = props;
	return (
		<Paper
			{...props}
			padding="lg"
			radius="md"
			shadow="sm"
			sx={{
				padding: '18px',
			}}
		>
			<Title order={1} style={{ marginBottom: '16px' }} color="blue">
				{title}
			</Title>
			<Divider style={{ marginBottom: '16px' }} />
			<Text fz="xl">{subtitle}</Text>
		</Paper>
	);
};
