import React from 'react';
import { Footer as BaseFooter } from '@mantine/core';

export const Footer = ({ children }) => {
	return (
		<BaseFooter height={60} p="md">
			{children}
		</BaseFooter>
	);
};