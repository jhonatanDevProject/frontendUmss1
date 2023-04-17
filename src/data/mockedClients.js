import { faker } from '@faker-js/faker';
const data = [];

for (let i = 0; i < 10; i++) {
	const obj = {
		name: faker.name.fullName(),
		id: faker.random.numeric(9, { allowLeadingZeros: true }),
		location: {
			state: faker.address.stateAbbr(),
			place: faker.address.city(),
		},
		vehicle: {
			make: faker.vehicle.manufacturer(),
			model: faker.vehicle.model(),
			fuel: Math.random() > 0.49 ? 'Gasolina' : 'Alcool',
			release: faker.date.past(10).getFullYear(),
		},
	};

	data.push(obj);
}

console.log(data);
export default data;
