// import {} from 'react';
import { Box, Flex, Title, Text } from '@mantine/core';

import clients from '~/data/mockedClients';
import Customer from './customer';
import Order from './order';

export const Details = ({ id }) => {
	const client = clients.find((c) => c.id === id);

	return (
		<Box>
			{client ? (
				<Flex direction="column" gap={10}>
					{/* FICHA DO CLIENTE */}
					<Customer data={client} />

					{/* FICHA DO SERVIÇO */}
					<Order data={client} />
					{/* <Demo /> */}
				</Flex>
			) : (
				<>
					<Title>404</Title>
					<Text>Cliente não encontrado</Text>
				</>
			)}
		</Box>
	);
};
