import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Client, Home, All, Employees } from '~/pages';
import { Delay } from '~/components';

export const Routes = () => {
	const DelayClient = Delay(Client, 1200);
	const DelayAllList = Delay(All, 1200);
	const DelayEmployees = Delay(Employees, 1200);
	return (
		<BaseRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/client" element={<DelayClient />} />
			<Route path="/orders" element={<DelayAllList />} />
			<Route path="/filter_orders" element={<DelayEmployees />} />
		</BaseRoutes>
	);
};
