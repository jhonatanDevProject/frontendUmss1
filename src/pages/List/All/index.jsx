// import {} from 'react'
import { Paper, Box, Title, Divider } from '@mantine/core';
import { useStore } from '~/store';
import { Accordion } from '~/components';

export const All = () => {
	const orders = useStore((state) => state.orders);

	return (
		<Box data-testid="all-content">
			<Title order={2} color="blue">
				Lista O.S. (Geral)
			</Title>
			<Divider />
			<Paper
				padding="lg"
				radius="md"
				shadow="sm"
				mt={10}
				sx={{
					padding: '18px',
				}}
			>
				<Accordion orders={orders} />
			</Paper>
		</Box>
	);
};
