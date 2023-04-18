import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Client, Home, List } from '~/pages';
import { Delay } from '~/components';

export const Routes = () => {
	const DelayClient = Delay(Client, 1200);
	const DelayList = Delay(List, 1200);
	return (
		<BaseRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<DelayClient />} />
			<Route path="/orders" element={<DelayList />} />
		</BaseRoutes>
	);
};
