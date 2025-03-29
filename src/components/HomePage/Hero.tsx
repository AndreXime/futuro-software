import BackgroundEffect from '../shared/BackgroundEffect';

export default function Hero() {
	return (
		<div className="px-6 pt-10 lg:px-8 relative">
			<BackgroundEffect />

			<div className="relative mx-auto max-w-2xl py-32 sm:py-40">
				<div className="text-center">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
						Transforme Seu Negócio com Soluções Inovadoras
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
						Na Futuro Software, criamos softwares personalizados e estratégias digitais para acelerar o crescimento e
						otimizar os processos da sua empresa.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/acessar"
							className="btn btn-primary btn-soft">
							Começar agora
						</a>
						<a
							href="/servicos"
							className="btn btn-ghost">
							Saber mais <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
