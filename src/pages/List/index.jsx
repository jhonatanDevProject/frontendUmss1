// import {} from 'react'
import { Paper, Box } from '@mantine/core';
import { useStore } from '~/store';

export const List = () => {
	const orders = useStore((state) => state.orders);
	console.log(orders);
	return (
		<Box>
			<Paper
				padding="lg"
				radius="md"
				shadow="sm"
				sx={{
					padding: '18px',
				}}
			></Paper>
		</Box>
	);
};
