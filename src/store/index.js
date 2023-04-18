import { create } from 'zustand';

export const useStore = create((set) => ({
	orders: [
		{
			customer: 'Tony Stark',
			id: '045789333',
			vehicle: {
				make: 'Fiat',
				model: 'Uno',
				fuel: 'Alcool',
				release: 2015,
			},
			order: {
				employee: 'Dave',
				parts: [],
				services: ['sv02', 'sv04'],
				complete: false,
			},
		},
	],
	addOrder: (order) =>
		set((state) => {
			state.orders.push(order);

			return {
				orders: state.orders,
			};
		}),
}));
