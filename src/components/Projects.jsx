import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			name: "blogsWebsite",
			description:
				"Sito web full-stack realizzato con Node.js ed Express per il backend, e React con Redux per il frontend. Consente agli utenti di condividere i loro siti web preferiti con altri utenti e di lasciare commenti per condividere opinioni e feedback.",

			href: "https://github.com/AFantaccino/blogsWebsite"
		},
		{
			name: "AngularStore",
			description:
				"Sito di e-commerce sviluppato con Angular per il frontend e Firebase per il backend. Gli utenti possono navigare tra i prodotti, utilizzando un filtro basato su categorie per trovare facilmente ciò che desiderano.",

			href: "https://github.com/AFantaccino/AngularStore"
		},
		{
			name: "Who is that Pokemon?",
			description:
				"Gioco di quiz utilizzando la Pokemon API, ancora un lavoro in progresso"
		}
	];

	return (
		<section className="py-20 lg:py-32 flex flex-col gap-24" id="projects">
			<div className="flex flex-col gap-2 text-center">
				<h6 className="text-large sm:text-xl md:text-2xl">
					Alcuni dei miei sforzi creativi.
				</h6>
				<h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
					Curioso di{" "}
					<span className="poppins text-slate-400">vedere il</span>{" "}
					mio lavoro?
				</h3>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
				{projects.map((proj, id) => (
					<Project key={id} project={proj} />
				))}
			</div>
		</section>
	);
};

export default Projects;
