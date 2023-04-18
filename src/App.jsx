import { useState } from 'react';
import {
	AppShell as BaseAppShell,
	Text,
	useMantineTheme,
	Image,
	Flex,
	Anchor,
	Box,
} from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { Footer, Header, Navbar } from '~/components';
import { Routes } from '~/routes';
import Provider from '~/theme/Provider';
import logo from '~/assets/logo.png';

export default function AppShell() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<Provider>
			<BaseAppShell
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
				navbar={<Navbar data-testid="navbar" opened={opened ? 1 : 0} />}
				footer={
					<Footer data-testid="footer">
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
					<Header
						data-testid="header"
						opened={opened ? 1 : 0}
						setOpened={setOpened}
					>
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
				<Box data-testid="content">
					<Routes />
				</Box>
			</BaseAppShell>
		</Provider>
	);
}
