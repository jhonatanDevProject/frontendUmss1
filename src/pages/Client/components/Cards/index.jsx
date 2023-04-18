// import {} from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { Card } from '~/components';
import clients from '~/data/mockedClients';

export const Cards = () => {
	const navigate = useNavigate();
	return (
		<Flex gap={24} wrap="wrap">
			{clients.map((c) => (
				<Card
					key={c.id}
					name={c.name}
					handle={() => navigate('/client?id=' + c.id)}
				/>
			))}
		</Flex>
	);
};
