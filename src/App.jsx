import { useState } from 'react';
import { AppShell, Text, useMantineTheme } from '@mantine/core';
import { Footer, Header, Navbar } from '~/components';
import Provider from '~/theme/Provider';

export default function AppShellDemo() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<Provider>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="sm"
				navbar={
					<Navbar opened={opened}>
						<Text>Application navbar</Text>
					</Navbar>
				}
				footer={<Footer>Application footer</Footer>}
				header={
					<Header opened={opened} setOpened={setOpened}>
						<Text>Application header</Text>
					</Header>
				}
			>
				<Text>Resize app to see responsive navbar in action</Text>
			</AppShell>
		</Provider>
	);
}