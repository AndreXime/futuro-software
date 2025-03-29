import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const Font_Roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Futuro Software',
	description: 'Uma empresa de software',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={`${Font_Roboto.variable} min-h-dvh flex flex-col antialiased`}>{children}</body>
		</html>
	);
}
