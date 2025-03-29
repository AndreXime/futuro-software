import { Nav, Footer } from '@/components/HomePage';
import Image from 'next/image';
import BackgroundEffect from '@/components/shared/BackgroundEffect';
const services = [
	{
		image: '/web.jpeg',
		nome: 'Desenvolvimento Web',
		preco: 'R$ 10.000+',
	},
	{
		image: '/mobile.jpg',
		nome: 'Desenvolvimento Mobile',
		preco: 'R$ 15.000+',
	},
	{
		image: '/ux.avif',
		nome: 'UI/UX Design',
		preco: 'R$ 5.000+',
	},
	{
		image: '/consultoria.JPG',
		nome: 'Consultoria em Software',
		preco: 'R$ 8.000+',
	},
	{
		image: '/suporte.jpeg',
		nome: 'Suporte e Manutenção',
		preco: 'R$ 2.000/mês',
	},
	{
		image: '/cloud.jpeg',
		nome: 'Infraestrutura Cloud',
		preco: 'Sob consulta',
	},
	{
		image: '/seo.png',
		nome: 'Otimização SEO',
		preco: 'R$ 3.500+',
	},
];

export default function Home() {
	return (
		<>
			<Nav />
			<main className="grow relative p-5">
				<BackgroundEffect />
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap">
							{services.map((servico) => (
								<div
									key={servico.nome}
									className="lg:w-1/4 md:w-1/2 p-4 w-full">
									<span className="block relative h-48 rounded overflow-hidden">
										<Image
											alt="ecommerce"
											width={200}
											height={200}
											className="object-cover object-center w-full h-full block"
											src={servico.image}
										/>
									</span>
									<div className="mt-4">
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
