const Project = ({ project }) => {
	// il pulsante per il link al progetto va controllato
	return (
		<div className="mx-5 h-min">
			<a
				href={project.href}
				target="_blank"
				className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-slate-700 text-center cursor-pointer group hover:border-slate-400 duration-200"
			>
				<div className="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
					<i className={project.icon} />
				</div>
				<h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
					{project.name}
				</h3>
				<p>{project.description}</p>
				<slot />
				{/* <div className="flex-1 flex justify-betweeen gap-4 items-end">
					<div className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
						<p className="z-4">Go to &rarr;</p>
					</div>
				</div> */}
			</a>
		</div>
	);
};

export default Project;
