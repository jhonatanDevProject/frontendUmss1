import {
	Card as BaseCard,
	Image,
	Text,
	Badge,
	Button,
	Group,
} from '@mantine/core';

import qrcode from '~/assets/qrcode.png';

export const Card = ({ name, handle }) => {
	return (
		<BaseCard
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			sx={{
				width: '250px',
			}}
		>
			<BaseCard.Section>
				<Image src={qrcode} height={250} alt="QRCode" />
			</BaseCard.Section>

			<Text weight={500}>{name}</Text>

			<Button
				variant="light"
				color="blue"
				fullWidth
				mt="md"
				radius="md"
				onClick={handle}
			>
				Ler QR Code
			</Button>
		</BaseCard>
	);
};
