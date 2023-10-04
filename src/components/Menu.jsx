import { Link } from "react-scroll";

const Menu = () => {
	//finito, magari un ultima occhiata

	const tabs = [
		{
			name: "Progetti",
			link: "projects"
		},
		{
			name: "Chi Sono",
			link: "about"
		},
		{
			name: "Contatti",
			link: "contacts"
		}
	];

	return (
		<header className="sticky z-[10] top-0 duration-200 flex items-center justify-between border-b border-solid p-6 bg-transparent border-transparent">
			<h1 className="font-medium link">
				<Link
					to="home"
					spy={true}
					smooth={true}
					offset={-100}
					duration={800}
					className="duration-200 hover:text-slate-400"
				>
					<b className="font-bold poppins">Alessandro </b>
					<span>Fantaccino</span>
				</Link>
			</h1>
			<div className="hidden sm:flex items-center gap-4">
				{tabs.map((tab, id) => (
					<Link
						to={tab.link}
						spy={true}
						smooth={true}
						offset={0}
						duration={800}
						key={id}
						className="duration-200 hover:text-slate-400 link"
					>
						{tab.name}
					</Link>
				))}
			</div>
		</header>
	);
};

export default Menu;
