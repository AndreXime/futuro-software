import { Nav, Footer } from '@/components/HomePage';
import Image from 'next/image';
import BackgroundEffect from '@/components/shared/BackgroundEffect';
import services from '@/content/ServicesContent';

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow relative py-20">
				<BackgroundEffect />
				<div className="flex items-center justify-center text-center mt-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços Completo</h2>
						<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
							Os preços podem variar conforme a complexidade do seu projeto, garantindo soluções personalizadas para
							cada necessidade.
						</p>
					</div>
				</div>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap">
							{services.map((servico) => (
								<div
									key={servico.nome}
									className="lg:w-1/4 md:w-1/2 p-4 w-full ">
									<span className="block relative h-48 rounded overflow-hidden">
										<Image
											alt="ecommerce"
											width={200}
											height={200}
											className="object-cover object-center w-full h-full block"
											src={servico.image}
										/>
									</span>
									<div className="py-4 bg-base-100 text-center border-2">
										<h2 className="text-gray-900 title-font text-lg font-medium">{servico.nome}</h2>
										<p className="mt-1">{servico.preco}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
