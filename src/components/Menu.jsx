import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<header className="py-6 px-3 sm:px-4 md:px-6">
			<ul className="flex items-start">
				<li className="block px-4 py-2 text-lg font-medium">
					<Link to="/">HOME</Link>
				</li>
				<li className="block px-4 py-2 text-lg font-medium">
					<Link to="/about">CHI SONO</Link>
				</li>
				<li className="block px-4 py-2 text-lg font-medium">
					<Link to="/projects">PROGETTI</Link>
				</li>
				<li className="block px-4 py-2 text-lg font-medium">
					<Link to="/contacts">CONTATTI</Link>
				</li>
			</ul>
		</header>
	);
};

export default Menu;
