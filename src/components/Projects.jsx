import Project from "./Project";

const Projects = () => {
	//aggiungere progetti
	const projects = [
		{
			name: "1",
			icon: "icon",
			description: "descr"
		},
		{
			name: "2",
			icon: "icon",
			description: "descr"
		},
		{
			name: "3",
			icon: "icon",
			description: "descr"
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
