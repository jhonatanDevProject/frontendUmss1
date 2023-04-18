// import {} from 'react'
import { Paper, Box, Select, Flex, Title, Divider } from '@mantine/core';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useStore } from '~/store';
import { Accordion } from '~/components';
import { Delay } from '~/components';
import employees from '~/data/mockedEmployees';

export const Employees = () => {
	const orders = useStore((state) => state.orders);
	const DelayAccordion = Delay(Accordion, 400);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const emp = searchParams.get('emp');
	const filteredOrders = orders.filter((o) => o.details.employee === emp);
	return (
		<Box data-testid="employee-content">
			<Title order={2} color="blue">
				Lista O.S. (Responsável)
			</Title>
			<Divider />
			<Paper
				padding="lg"
				radius="md"
				shadow="sm"
				sx={{
					padding: '18px',
				}}
			>
				<Flex direction="column" gap={14}>
					<Select
						data={employees}
						label="Busque serviço por responsável"
						onChange={(v) => navigate(`/filter_orders?emp=${v}`)}
						searchable
					/>
					{emp ? (
						<DelayAccordion orders={filteredOrders} />
					) : (
						<DelayAccordion orders={orders} />
					)}
				</Flex>
			</Paper>
		</Box>
	);
};
