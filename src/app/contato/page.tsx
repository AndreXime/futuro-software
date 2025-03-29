import Form from './ContactForm';
import { Nav } from '@/components/HomePage';
import BackgroundEffect from '@/components/shared/BackgroundEffect';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow relative py-20">
				<BackgroundEffect />
				<div className="flex items-center justify-center text-center mt-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Onde você pode nós encontrar
						</h2>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
							Você pode entrar em contato por email, telefone, rede sociais ou por esse formulario
						</p>
					</div>
				</div>

				<Form />
			</main>
		</>
	);
}
