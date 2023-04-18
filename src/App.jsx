import { useState } from 'react';
import {
	AppShell,
	Text,
	useMantineTheme,
	Image,
	Flex,
	Anchor,
} from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { Footer, Header, Navbar } from '~/components';
import { Routes } from '~/routes';
import Provider from '~/theme/Provider';
import logo from '~/assets/logo.png';

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
				navbar={<Navbar opened={opened} />}
				footer={
					<Footer>
						<Flex gap={6}>
							<span>Desenvolvido com</span>
							<IconHeartFilled />
							por
							<Anchor
								href="https://github.com/alant2031"
								target="_blank"
								underline={false}
								weight={700}
							>
								{' '}
								Alan Tanaka
							</Anchor>
						</Flex>
					</Footer>
				}
				header={
					<Header opened={opened} setOpened={setOpened}>
						<Image
							height={40}
							width={40}
							fit="fill"
							radius="md"
							src={logo}
							alt="logo"
						/>
						<Text fw={700} color="blue" ml={4}>
							ULTRACAR
						</Text>
					</Header>
				}
			>
				<Routes />
			</AppShell>
		</Provider>
	);
}
