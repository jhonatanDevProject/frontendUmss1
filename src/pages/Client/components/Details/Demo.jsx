import { useForm } from '@mantine/form';
import {
	NumberInput,
	TextInput,
	Button,
	Box,
	NativeSelect,
} from '@mantine/core';

export function Demo() {
	const form = useForm({
		initialValues: {
			name: 'Zoma',
			email: 'kkk@mail.com',
			age: 0,
			func: 'React',
		},

		// functions will be used to validate values at corresponding key
		validate: {
			name: (value) =>
				value.length < 2 ? 'Name must have at least 2 letters' : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			age: (value) =>
				value < 18 ? 'You must be at least 18 to register' : null,
			func: (value) => (value === '' ? 'Selecione um mecanico' : null),
		},
	});

	return (
		<Box maw={320} mx="auto">
			<form onSubmit={form.onSubmit(console.log)}>
				<TextInput
					label="Name"
					placeholder="Name"
					{...form.getInputProps('name')}
				/>
				<TextInput
					mt="sm"
					label="Email"
					placeholder="Email"
					{...form.getInputProps('email')}
				/>
				<NumberInput
					mt="sm"
					label="Age"
					placeholder="Age"
					min={0}
					max={99}
					{...form.getInputProps('age')}
				/>
				<NativeSelect
					data={['React', 'Vue', 'Kimura', 'Gatsby']}
					label="Select your favorite framework/library"
					description="This is anonymous"
					withAsterisk
					{...form.getInputProps('func')}
				/>
				<Button type="submit" mt="sm">
					Submit
				</Button>
			</form>
		</Box>
	);
}
