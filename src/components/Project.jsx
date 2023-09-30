const Project = ({ project }) => {
	//carousel image maybe

	return (
		<div className="w-full lg:w-8/12 2xl:w-10/12 px-3 sm:px-6 py-6 m-auto rounded overflow-hidden shadow-lg bg-zinc-900 h-full">
			<img
				src={project.img}
				alt="img not working"
				className="hidden lg:block lg:w-60 m-3"
			/>
			<div className="p-3">
				<a href={project.link} target="_blank">
					<h2 className="font-bold text-xl my-3 flex gap-1 underline">
						<p>{project.name}</p>
					</h2>
				</a>
				<p className="pb-3">{project.descr}</p>
				<div className="w-full flex flex-wrap">
					{project.techs.map((tech, id) => (
						<p
							key={id}
							className="border-2 border-zinc-300 rounded p-1 my-3 mr-3 w-fit"
						>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
