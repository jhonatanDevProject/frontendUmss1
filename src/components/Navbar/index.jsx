import {
	IconUserQuestion,
	IconList,
	IconUserCircle,
} from '@tabler/icons-react';
import { Navbar as BaseNavbar, NavLink } from '@mantine/core';

export const Navbar = ({ opened }) => {
	return (
		<BaseNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<NavLink label="Cliente" icon={<IconUserQuestion />} />
			<NavLink label="Lista de serviços" icon={<IconList />}>
				<NavLink label="Geral" />
				<NavLink label="Colaborador" />
			</NavLink>
			<NavLink label="Sobre" icon={<IconUserCircle />} />
		</BaseNavbar>
	);
};
