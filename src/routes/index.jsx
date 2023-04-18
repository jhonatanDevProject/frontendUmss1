import { useState, useEffect } from 'react';
import { Loader } from '@mantine/core';
import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Client, Home } from '~/pages';
import { Delay } from '~/components';

export const Routes = () => {
	const DelayClient = Delay(Client, 1500);
	return (
		<BaseRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<DelayClient />} />
		</BaseRoutes>
	);
};
