/**
 * O container pai deve ter propriedade relativa
 */
export default function BackgroundEffect() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden blur-2xl">
			{/* Forma 1 - Canto superior esquerdo */}
			<div
				style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}}
				className="absolute left-[-10%] top-[-10%] w-[40vw] h-[40vh] rotate-[15deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
			/>

			{/* Forma 2 - Canto inferior direito */}
			<div
				style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}}
				className="absolute right-[-15%] bottom-[-10%] w-[50vw] h-[50vh] rotate-[45deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
			/>

			{/* Forma 3 - Centro-direita */}
			<div
				style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}}
				className="absolute right-[10%] top-[30%] w-[35vw] h-[35vh] rotate-[25deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
			/>

			{/* Forma 4 - Centro-esquerda */}
			<div
				style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
				}}
				className="absolute left-[5%] bottom-[30%] w-[45vw] h-[45vh] rotate-[10deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-35"
			/>
		</div>
	);
}
