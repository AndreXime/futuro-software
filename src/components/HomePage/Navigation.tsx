'use client';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FaBars, FaBox, FaX } from 'react-icons/fa6';
import { useState } from 'react';
import Link from 'next/link';

const navigation = [
	{ name: 'Serviços', href: '/servicos' },
	{ name: 'Contato', href: '/contato' },
];

export default function Nav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="-m-1.5 p-1.5">
						<span className="sr-only">Futuro Software</span>
						<FaBox size={25} />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<FaBars
							aria-hidden="true"
							size={25}
						/>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm/6 font-semibold text-gray-900">
							{item.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href="/acessar"
						className="text-sm/6 font-semibold text-gray-900">
						Entrar <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-end">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700">
							<span className="sr-only">Close menu</span>
							<FaX
								size={22}
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className=" py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										{item.name}
									</Link>
								))}
							</div>
							<div className="py-6">
								<Link
									href="/acessar"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
									Entrar
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
