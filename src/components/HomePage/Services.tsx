import Link from 'next/link';
import { FaCode, FaLightbulb, FaPalette } from 'react-icons/fa6';
const services = [
	{
		title: 'Desenvolvimento Sob Medida',
		description:
			'Criamos sistemas personalizados para otimizar a gestão e os processos de negócios, atendendo às necessidades específicas de cada cliente.',
	},
	{
		title: 'Integração de Sistemas',
		description:
			'Integramos diferentes plataformas e ferramentas para que sua empresa tenha um fluxo de trabalho mais ágil e eficiente.',
	},
	{
		title: 'Manutenção e Suporte',
		description:
			' Garantimos que seus sistemas funcionem sempre da melhor forma possível com suporte técnico contínuo e melhorias constantes.',
	},
];

export default function Services() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-base-200">
			<div className="px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Principais serviços</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Veja nossos serviços mais populares que são sob medida para o que seu projeto precisa.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<Link
							key={index}
							href="/services/interface-design"
							className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-xl">
							<div className="flex flex-col items-center space-y-4">
								<div className="rounded-full bg-blue-100 p-3 ">
									{index == 0 && <FaPalette className="h-6 w-6 text-blue-600 " />}
									{index == 1 && <FaCode className="h-6 w-6 text-purple-600 " />}
									{index == 2 && <FaLightbulb className="h-6 w-6 text-indigo-600 " />}
								</div>
								<h3 className="text-xl font-bold">{service.title}</h3>
								<p className="text-center text-gray-500">{service.description}</p>
							</div>
						</Link>
					))}
				</div>
				<div className="flex justify-center">
					<Link
						className="btn btn-outline btn-lg"
						href="/services">
						Ver todos os serviços
					</Link>
				</div>
			</div>
		</section>
	);
}
