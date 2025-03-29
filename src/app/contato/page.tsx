import Cards from '@/components/ContatoPage/Cards';
import Form from '@/components/ContatoPage/Form';
import { Nav } from '@/components/HomePage';
import BackgroundEffect from '@/components/shared/BackgroundEffect';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow relative py-20">
				<BackgroundEffect />
				<h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pt-5">
					Onde você pode nós encontrar
				</h2>
				<Form />
				<Cards />
			</main>
		</>
	);
}
