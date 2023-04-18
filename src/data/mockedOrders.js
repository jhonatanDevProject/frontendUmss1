import { faker } from '@faker-js/faker';
import employees from '~/data/mockedEmployees';
const data = [];
for (let i = 0; i < 2; i++) {
	const obj = {
		id: faker.random.numeric(6, { allowLeadingZeros: true }).toString(),
		customer: {
			name: faker.name.fullName(),
			id: faker.random.numeric(9, { allowLeadingZeros: true }).toString(),
		},
		vehicle: {
			make: faker.vehicle.manufacturer(),
			model: faker.vehicle.model(),
			fuel: Math.random() > 0.49 ? 'Gasolina' : 'Alcool',
			release: faker.date.past(10).getFullYear(),
		},
		details: {
			employee: faker.helpers.arrayElement(employees),
			parts: [faker.helpers.arrayElement(['pt01', 'pt02', 'pt03'])],
			services: [faker.helpers.arrayElement(['sv07', 'sv08', 'sv09'])],
			complete: Math.random() > 0.49,
		},
	};
	data.push(obj);
}

export default data;
