// import {} from 'react';
import {
	Paper,
	MultiSelect,
	Title,
	Divider,
	NativeSelect,
	Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import { mechanic_services, carParts } from '~/data/mockedServices';
import employees from '~/data/mockedEmployees';
const Order = ({ data }) => {
	const form = useForm({
		initialValues: {
			emp: employees[0],
		},

		// functions will be used to validate values at corresponding key
		validate: {
			services: (value) => {
				return value?.length ? null : 'Selecione um serviço';
			},
			emp: (value) => (value === '' ? 'Selecione um mecanico' : null),
		},
	});
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
			<Title order={2}>Ordem de serviço</Title>
			<Divider size={10} />
			<form onSubmit={form.onSubmit(console.log)}>
				<MultiSelect
					data={mechanic_services}
					label="Serviços disponíveis na Ultracar"
					placeholder="Selecione"
					searchable
					{...form.getInputProps('services')}
				/>

				<MultiSelect
					data={carParts}
					label="Peças para trocar"
					placeholder="Selecione"
					searchable
					{...form.getInputProps('parts')}
				/>
				<NativeSelect
					label="Mecânico responsável pelo serviço"
					placeholder="Selecione"
					data={employees}
					rightSection={<IconChevronDown size="1rem" />}
					rightSectionWidth={40}
					{...form.getInputProps('emp')}
				/>
				<Button type="submit" mt="sm">
					Confirmar
				</Button>
			</form>
		</Paper>
	);
};

export default Order;
