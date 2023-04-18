import React from 'react';
import { Footer as BaseFooter } from '@mantine/core';

export const Footer = (props) => {
	return (
		<BaseFooter
			height={60}
			p="md"
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
			}}
			{...props}
		>
			{props.children}
		</BaseFooter>
	);
};
