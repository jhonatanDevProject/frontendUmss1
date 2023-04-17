import { useState } from 'react';
import { Navbar as BaseNavbar } from '@mantine/core';

export const Navbar = ({ opened, children }) => {
	return (
		<BaseNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			{children}
		</BaseNavbar>
	);
};
