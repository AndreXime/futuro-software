import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const cards = [
	{
		icon: (
			<FaEnvelope
				size={38}
				className="text-purple-600"
			/>
		), // Ícone de e-mail
		title: 'Email',
		description: 'Contact us at',
		link: { text: 'hello@loopple.com', href: 'mailto:hello@loopple.com' },
	},
	{
		icon: (
			<FaPhoneAlt
				size={38}
				className="text-purple-600"
			/>
		), // Ícone de telefone
		title: 'Phone',
		description: 'Reach out to us by phone',
		link: { text: '+516-486-5135', href: 'tel:+516-486-5135' },
	},
	{
		icon: (
			<FaMapMarkerAlt
				size={38}
				className="text-purple-600"
			/>
		), // Ícone de localização
		title: 'Location',
		description: 'Visit our office',
		link: { text: '123 Main St, NY', href: 'https://goo.gl/maps/example' },
	},
];

export default function ContactCards() {
	return (
		<div className="flex flex-col mx-auto">
			<div className="w-full draggable">
				<div className="flex flex-col items-center gap-16 mx-auto my-32">
					<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 p-5">
						{cards.map((card, index) => (
							<div
								key={index}
								className="flex flex-col items-center gap-3 px-8 py-10 bg-base-200 rounded-3xl shadow-main">
								{card.icon}
								<p className="text-2xl font-extrabold text-dark-grey-900">{card.title}</p>
								<p className="text-base leading-7 text-dark-grey-600">{card.description}</p>
								<a
									className="text-lg font-bold text-purple-blue-500"
									href={card.link.href}>
									{card.link.text}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
