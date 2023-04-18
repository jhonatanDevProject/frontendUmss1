import { useCallback } from 'react';
import {
	IconCircleDotFilled,
	IconCircleCheckFilled,
} from '@tabler/icons-react';
import {
	Accordion as BaseAccordion,
	rem,
	Text,
	Title,
	useMantineTheme,
	Divider,
	Group,
	Button,
	Flex,
} from '@mantine/core';
import { carParts, mechanic_services } from '~/data/mockedServices';
import { DateInput } from '~/components';
import { useStore } from '~/store';

export const Accordion = ({ orders }) => {
	const theme = useMantineTheme();
	const getColor = (color) =>
		theme.colors[color][theme.colorScheme === 'dark' ? 5 : 7];

	return (
		<BaseAccordion variant="contained">
			{orders.map((o) => (
				<BaseAccordion.Item key={o.id} value={o.id}>
					<BaseAccordion.Control
						icon={
							o.details.complete ? (
								<IconCircleCheckFilled size={rem(20)} />
							) : (
								<IconCircleDotFilled size={rem(20)} />
							)
						}
					>
						<Text color={getColor('blue')}>Ordem de Serviço Nº {o.id}</Text>
					</BaseAccordion.Control>
					<BaseAccordion.Panel>
						<Title order={4}>Cliente: {o.customer.name}</Title>
						<Divider />
						<Text>
							<span style={{ fontWeight: 'bold' }}>Veiculo:</span>{' '}
							{o.vehicle.model}
						</Text>
						<Text>
							<span style={{ fontWeight: 'bold' }}>Combustível:</span>{' '}
							{o.vehicle.fuel}
						</Text>
						<Text>
							<span style={{ fontWeight: 'bold' }}>Peças:</span>{' '}
							<ul>
								{o.details.parts.map((p) => {
									const part = carParts.find((c) => c.value === p);
									return <li key={p}>{part.label}</li>;
								})}
							</ul>
						</Text>
						<Text>
							<span style={{ fontWeight: 'bold' }}>Serviços:</span>{' '}
							<ul>
								{o.details.services.map((s) => {
									const service = mechanic_services.find((c) => c.value === s);
									return <li key={s}>{service.label}</li>;
								})}
							</ul>
						</Text>
						<Text>
							<span style={{ fontWeight: 'bold' }}>Responsável:</span>{' '}
							{o.details.employee}
						</Text>
						<Divider />
						<Flex direction="column">
							<Group>
								<DateInput label="Início" />
								<DateInput label="Entrega" />
							</Group>
							<Button
								type="submit"
								mt="sm"
								sx={{
									width: '20%',
									alignSelf: 'center',
								}}
							>
								Agendar
							</Button>
						</Flex>
					</BaseAccordion.Panel>
				</BaseAccordion.Item>
			))}
		</BaseAccordion>
	);
};
