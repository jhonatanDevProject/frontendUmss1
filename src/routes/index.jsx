// import {} from 'react';
import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Home } from '~/pages/Home';

export const Routes = () => {
	return (
		<BaseRoutes>
			<Route path="/" element={<Home />} />
		</BaseRoutes>
	);
};
