// import {} from 'react';
import {
	Paper,
	Box,
	Flex,
	MultiSelect,
	Title,
	Divider,
	NativeSelect,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import clients from '~/data/mockedClients';
import Customer from './customer';
import { mechanic_services, carParts } from '~/data/mockedServices';
import employees from '~/data/mockedEmployees';

export const Details = ({ id }) => {
	const client = clients.find((cli) => cli.id === id);

	return (
		<Box>
			{client ? (
				<Flex direction="column" gap={10}>
					{/* FICHA DO CLIENTE */}
					<Customer data={client} />

					{/* FICHA DO SERVIÇO */}
					<Paper
						padding="lg"
						radius="md"
						shadow="sm"
						sx={{
							padding: '18px',
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
						}}
					>
						<Title order={2}>Ordem de serviço</Title>
						<Divider size={10} />
						<MultiSelect
							data={mechanic_services}
							label="Serviços disponíveis na Ultracar"
							placeholder="Selecione"
							searchable
						/>

						<MultiSelect
							data={carParts}
							label="Peças para trocar"
							placeholder="Selecione"
							searchable
						/>
						<NativeSelect
							label="Mecânico responsável pelo serviço"
							placeholder="Selecione"
							data={employees}
							rightSection={<IconChevronDown size="1rem" />}
							rightSectionWidth={40}
						/>
					</Paper>
				</Flex>
			) : (
				'404 Client not found :('
			)}
		</Box>
	);
};
