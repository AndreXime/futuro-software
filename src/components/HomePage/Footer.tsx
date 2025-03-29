import { FaReact } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="footer footer-horizontal footer-center bg-base-300 p-5">
			<p className="font-bold">
				<FaReact size={50} />
				ACME Industries Ltd.
				<br />
				Providing reliable tech since 1992
				<span className="font-normal">Copyright © {new Date().getFullYear()} - All right reserved</span>
			</p>
		</footer>
	);
}
