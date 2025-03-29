import { Footer, Nav } from '@/components/HomePage';
import CardAcess from '@/components/AcessPage/AcessCard';
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
