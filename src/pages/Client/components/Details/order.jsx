import { useCallback } from 'react';
import {
	Paper,
	MultiSelect,
	Title,
	Divider,
	NativeSelect,
	Button,
} from '@mantine/core';
import { faker } from '@faker-js/faker';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { mechanic_services, carParts } from '~/data/mockedServices';
import employees from '~/data/mockedEmployees';
import { useStore } from '~/store';
const Order = ({ data }) => {
	const navigate = useNavigate();
	const addOrder = useStore((state) => state.addOrder);
	const form = useForm({
		initialValues: {
			employee: employees[0],
		},

		// functions will be used to validate values at corresponding key
		validate: {
			services: (value) => {
				return value?.length ? null : 'Selecione um serviço';
			},
			employee: (value) => (value === '' ? 'Selecione um mecanico' : null),
		},
	});
	const handleSubmit = useCallback(
		(values) => {
			const newOrder = {
				id: faker.random.numeric(6, { allowLeadingZeros: true }).toString(),
				customer: {
					name: data.name,
					id: data.id,
				},
				vehicle: { ...data.vehicle },
				details: {
					complete: false,
					parts: values.parts ? values.parts : [],
					...values,
				},
			};
			addOrder(newOrder);
			navigate('/orders');
		},
		[form.values],
	);
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
			<form onSubmit={form.onSubmit(handleSubmit)}>
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
					{...form.getInputProps('employee')}
				/>
				<Button type="submit" mt="sm">
					Confirmar
				</Button>
			</form>
		</Paper>
	);
};

export default Order;
