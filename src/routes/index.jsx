import { Route, Routes as BaseRoutes } from 'react-router-dom';
import { Client, Home, All, Employees, NotFound } from '~/pages';
import { Delay } from '~/components';
import AsociacionComitElec from '~/pages/pruevas/AsociacionComitElec ';
import EditFrente from '~/pages/crud/frentes/editFrente';
import IngresarFrente from '~/pages/crud/frentes/ingresarFrente';
import IndexFrente from '~/pages/crud/frentes/indexFrentes';




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

			<Route
          exact path="/admin/AsociacionComitElec"
          element={<AsociacionComitElec />}

        />

<Route
          path="/admin/indexFrente"
          element={<IndexFrente />}
        />
        <Route
          path="/admin/IngresarFrente"
          element={<IngresarFrente />}
        />
        <Route
          exact path="/admin/EditFrente/:id"
          element={<EditFrente />}
        />


		</BaseRoutes>
	);
};
