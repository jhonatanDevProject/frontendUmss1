import { IconUserQuestion, IconList, IconHome2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Navbar as BaseNavbar, NavLink } from '@mantine/core';

export const Navbar = (props) => {
	const navigate = useNavigate();
	return (
		<BaseNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!props.opened}
			width={{ sm: 200, lg: 300 }}
			{...props}
		>
			<NavLink
				data-testid="home-link"
				label="Home"
				icon={<IconHome2 />}
				onClick={() => navigate('/')}
			/>
			<NavLink
				data-testid="client-link"
				label="Cliente"
				icon={<IconUserQuestion />}
				onClick={() => navigate('client')}
			/>
			<NavLink label="Lista de serviços" icon={<IconList />}>
				<NavLink
					data-testid="all-link"
					label="Geral"
					onClick={() => navigate('orders')}
				/>
				<NavLink
					data-testid="employee-link"
					label="Responsável"
					onClick={() => navigate('filter_orders')}
				/>
			</NavLink>
		</BaseNavbar>
	);
};
