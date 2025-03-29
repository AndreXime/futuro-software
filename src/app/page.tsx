import { Nav, Footer, Hero, Teams, CTASection, About, Services } from '@/components';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow">
				<Hero />
				<About />
				<Services />
				<Teams />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
