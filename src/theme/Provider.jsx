import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

const Provider = ({ children }) => {
	const [colorScheme, setColorScheme] = useState('light');
	const toggleColorScheme = (value) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default Provider;
