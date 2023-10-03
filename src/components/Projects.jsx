import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			name: "BlogsApi",
			link: "https://blogapi-ldpc.onrender.com",
			code: "https://github.com/AFantaccino/blogApi",
			img: [
				{ original: "/blogApi.png" },
				{ original: "/blogApi2.png" },
				{ original: "/blogApi3.png" }
			],
			descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			techs: ["React", "Redux", "Node.js", "MongoDB", "Material Ui"]
		},
		{
			name: "fakeStore",
			link: "https://afantaccino.github.io/fakeStore",
			code: "https://github.com/AFantaccino/fakeStore",
			img: [
				{ original: "/fakeStore.png" },
				{ original: "/fakeStore2.png" }
			],
			descr: "Si tratta di un sito di e-commerce che ho creato da zero, con funzionalità di login e signup per una gestione sicura degli utenti. Il sito offre una vasta gamma di prodotti di alta qualità e una navigazione intuitiva, garantendo un'esperienza di shopping online piacevole e senza complicazioni. Ho implementato misure di sicurezza robuste per proteggere i dati dei clienti e incluso offerte speciali per migliorare l'interazione con gli utenti.",
			techs: ["Angular", "Firebase", "Bootstrap"]
		}
	];

	return (
		<div className="p-5 grid lg:grid-cols-2 gap-3">
			{projects.map((project, id) => (
				<Project key={id} project={project} />
			))}
		</div>
	);
};

export default Projects;
