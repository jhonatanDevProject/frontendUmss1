// import {} from 'react';
import { Paper, Text, Title, Divider, Box } from '@mantine/core';

export const Jumbotron = ({ title, subtitle }) => {
	return (
		<Paper
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
