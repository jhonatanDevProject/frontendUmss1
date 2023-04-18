import { useState, useEffect } from 'react';
import { Loader as BaseLoader, Box } from '@mantine/core';

export const Delay = (Component, delay) => {
	return (props) => {
		const [isLoading, setIsLoading] = useState(true);

		const Loader = (props) => (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<BaseLoader {...props} />
			</Box>
		);

		useEffect(() => {
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, delay);

			return () => clearTimeout(timer);
		}, []);

		return isLoading ? <Loader size="xl" /> : <Component {...props} />;
	};
};
