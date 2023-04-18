// import {} from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Title, Box, Divider } from '@mantine/core';
import { Card } from '~/components';
import clients from '~/data/mockedClients';

export const Cards = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<Title order={2} color="blue">
				Identificação do cliente
			</Title>
			<Divider />
			<Flex gap={24} wrap="wrap" mt={10}>
				{clients.map((c) => (
					<Card
						data-testid={`cli-${c.id}`}
						client_key={c.id}
						key={c.id}
						name={c.name}
						handle={() => navigate('/client?id=' + c.id)}
					/>
				))}
			</Flex>
		</Box>
	);
};
