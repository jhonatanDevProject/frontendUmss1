import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Client, Home, All, Employees, NotFound } from '~/pages';
import { Delay } from '~/components';

export const Routes = () => {
	const DelayHome = Delay(Home, 500);
	const DelayClient = Delay(Client, 800);
	const DelayAllList = Delay(All, 800);
	const DelayEmployees = Delay(Employees, 800);
	const DelayNotFound = Delay(NotFound, 500);
	return (
		<BaseRoutes>
			<Route path="/" element={<DelayHome />} />
			<Route path="/client" element={<DelayClient />} />
			<Route path="/orders" element={<DelayAllList />} />
			<Route path="/filter_orders" element={<DelayEmployees />} />
			<Route path="*" element={<DelayNotFound />} />
		</BaseRoutes>
	);
};
