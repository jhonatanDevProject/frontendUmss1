import { faker } from '@faker-js/faker';
const data = [];

for (let i = 0; i < 5; i++) {
	const name = faker.name.firstName('male');
	data.push(name);
}

export default data;
