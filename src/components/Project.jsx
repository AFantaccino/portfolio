const Project = ({ project }) => {
	return (
		<div className="mx-5 h-min">
			<div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center group hover:border-slate-400 duration-200">
				<div className="grid place-items-center px-4 text-5xl md:text-6xl mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 mx-auto duration-200">
					<h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
						{project.name}
					</h3>
				</div>
				<p>{project.description}</p>
				<div className="flex-1 flex gap-4 justify-end">
					<a href={project.href} target="_blank">
						<div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
							<p className="z-4">Visita &rarr;</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
