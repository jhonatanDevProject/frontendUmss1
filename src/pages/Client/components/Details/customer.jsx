// import {} from 'react';
import { Paper, Title, Text, Box, Divider, Stack, Group } from '@mantine/core';

const Customer = ({ data }) => {
	return (
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
			<Title order={2} color="blue">
				Detalhes do cliente
			</Title>
			<Divider size={10} />
			<Stack
				sx={{
					border: '1px solid gray',
					borderRadius: '20px',
					padding: '12px',
				}}
			>
				<Group>
					<Text fw={700} fz="lg">
						Name:
					</Text>
					<Text>{data.name}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						CPF:
					</Text>
					<Text>{data.id}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						Estado:
					</Text>
					<Text>{data.location.state}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						Cidade:
					</Text>
					<Text>{data.location.place}</Text>
				</Group>
			</Stack>
			<Title order={3} color="blue">
				Veículo
			</Title>
			<Divider size="lg" />
			<Stack
				sx={{
					border: '1px solid gray',
					borderRadius: '20px',
					padding: '12px',
				}}
			>
				<Group>
					<Text fw={700} fz="lg">
						Fabricante:
					</Text>
					<Text>{data.vehicle.make}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						Modelo:
					</Text>
					<Text>{data.vehicle.model}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						Combustível:
					</Text>
					<Text>{data.vehicle.fuel}</Text>
				</Group>
				<Group>
					<Text fw={700} fz="lg">
						Ano:
					</Text>
					<Text>{data.vehicle.release}</Text>
				</Group>
			</Stack>
		</Paper>
	);
};

export default Customer;
