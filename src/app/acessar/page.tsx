import { Footer, Nav } from '@/components/HomePage';
import CardAcess from './AcessForm';
import BackgroundEffect from '@/components/shared/BackgroundEffect';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow relative px-7">
				<BackgroundEffect />
				<CardAcess />
			</main>
			<Footer />
		</>
	);
}
