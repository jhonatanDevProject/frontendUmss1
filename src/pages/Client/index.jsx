// import {} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Cards, Details } from '~/pages/Client/components';
import { Delay } from '~/components';

export const Client = () => {
	const DelayDetails = Delay(Details, 800);
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	return (
		<Box gap={24} wrap="wrap">
			{id ? <DelayDetails id={id} /> : <Cards />}
		</Box>
	);
};
