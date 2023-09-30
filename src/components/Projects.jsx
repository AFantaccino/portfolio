import Project from "./Project";

const Projects = () => {
	const projects = [
		{
			name: "BlogsApi",
			link: "#",
			img: "/test.jpg",
			descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			techs: ["React", "Redux", "Node.js", "MongoDB"]
		},
		{
			name: "BlogsApi",
			link: "#",
			img: "/test.jpg",
			descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			techs: ["React", "Redux", "Node.js", "MongoDB"]
		},
		{
			name: "BlogsApi",
			link: "#",
			img: "/test.jpg",
			descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			techs: ["React", "Redux", "Node.js", "MongoDB"]
		},
		{
			name: "BlogsApi",
			link: "#",
			img: "/test.jpg",
			descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			techs: ["React", "Redux", "Node.js", "MongoDB"]
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
