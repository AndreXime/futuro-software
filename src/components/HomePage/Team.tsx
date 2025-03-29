import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Team = [
	{
		image: '/linus.webp',
		name: 'Linus Tovalds',
		role: 'Founder CEO',
	},
	{
		image: '/foto.jpg',
		name: 'Sarah Daeva',
		role: 'Marketing',
	},
];

export default function Teams() {
	return (
		<div
			id="team"
			className="section pt-20 pb-8 md:pt-16">
			<div className="mx-auto px-4">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conheça nossa equipe</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Cada um com sua expertise na sua área fazendo o produto o mais moderno possivel
						</p>
					</div>
				</div>

				<div className="flex flex-wrap flex-row -mx-4 justify-center mt-10">
					{Team.map((person) => (
						<div
							key={person.name}
							className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
							<div className="relative overflow-hidden mb-12">
								<div className="relative overflow-hidden px-6">
									<Image
										width={500}
										height={500}
										src={person.image}
										className="w-full h-full mx-auto rounded-full bg-gray-50 object-cover"
										alt="title image"
									/>
								</div>
								<div className="pt-6 text-center">
									<p className="text-lg leading-normal font-bold mb-1">{person.name}</p>
									<p className="text-gray-500 leading-relaxed font-light">{person.role}</p>
									<div className="mt-2 mb-5 space-x-2">
										<a
											className="hover:text-blue-700"
											aria-label="Instagram link"
											href="#">
											<FaInstagram className="inline-block" />
										</a>
										<a
											className="hover:text-blue-700"
											aria-label="Linkedin link"
											href="#">
											<FaLinkedin className="inline-block" />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
