import { create } from 'zustand';
import orders from '~/data/mockedOrders';

export const useStore = create((set) => ({
	orders,
	addOrder: (order) =>
		set((state) => {
			state.orders.push(order);

			return {
				orders: state.orders,
			};
		}),
}));
