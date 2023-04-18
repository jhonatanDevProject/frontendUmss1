// import {} from 'react'
import { Paper, Box } from '@mantine/core';
import { useStore } from '~/store';
import { Accordion } from '~/components';

export const All = () => {
	const orders = useStore((state) => state.orders);

	return (
		<Box>
			<Paper
				padding="lg"
				radius="md"
				shadow="sm"
				sx={{
					padding: '18px',
				}}
			>
				<Accordion orders={orders} />
			</Paper>
		</Box>
	);
};
