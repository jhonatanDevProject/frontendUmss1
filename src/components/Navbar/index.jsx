import { IconUserQuestion, IconList, IconHome2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Navbar as BaseNavbar, NavLink } from '@mantine/core';

export const Navbar = ({ opened }) => {
	const navigate = useNavigate();
	return (
		<BaseNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<NavLink
				label="Home"
				icon={<IconHome2 />}
				onClick={() => navigate('/')}
			/>
			<NavLink
				label="Cliente"
				icon={<IconUserQuestion />}
				onClick={() => navigate('client')}
			/>
			<NavLink label="Lista de serviços" icon={<IconList />}>
				<NavLink label="Geral" onClick={() => navigate('orders')} />
				<NavLink
					label="Colaborador"
					onClick={() => navigate('filter_orders')}
				/>
			</NavLink>
		</BaseNavbar>
	);
};
