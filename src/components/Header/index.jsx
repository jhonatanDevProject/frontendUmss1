// import {} from 'react';
import {
	Header as BaseHeader,
	Burger,
	Flex,
	MediaQuery,
	useMantineTheme,
} from '@mantine/core';
import ThemeButton from '~/theme/themeButton';

export const Header = (props) => {
	const { setOpened, opened, children } = props;
	const theme = useMantineTheme();
	return (
		<BaseHeader
			height={{ base: 50, md: 70 }}
			p="md"
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
			{...props}
		>
			<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Burger
						opened={opened ? 1 : 0}
						onClick={() => setOpened((o) => !o)}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				{children}
			</div>
			<ThemeButton />
		</BaseHeader>
	);
};
