const Project = ({ project }) => {
	return (
		<div className="mx-3">
			<div className="h-full p-2 sm:p-4 md:p-6 flex flex-col justify-between gap-4 rounded-lg border border-solid border-slate-700 text-center hover:border-slate-400 duration-200">
				<h3 className="font-medium text-xl sm:text-2xl -mt-6 sm:-mt-8 md:-mt-10 mx-auto">
					{project.name}
				</h3>
				<div className="self-center">
					<p>{project.description}</p>
				</div>
				<div className="flex gap-4 justify-end">
					{project.href && (
						<a href={project.href} target="_blank">
							<div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
								<p className="z-4">Visita &rarr;</p>
							</div>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
