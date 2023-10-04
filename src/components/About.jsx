const About = () => {
	//	 Aggiungere sezione con piu informazioni su di me

	const benefits = [
		{
			name: "1",
			description: ""
		},
		{
			name: "2",
			description: ""
		},
		{
			name: "3",
			description: ""
		}
	];

	return (
		<section
			id="about"
			className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
		>
			<div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-slate-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-slate-700 py-4">
				<h6 className="text-large sm:text-xl md:text-2xl">
					Vuoi conoscere di piu'?
				</h6>
				<h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
					Un po <span className="text-slate-400">su di me</span>.
				</h3>
			</div>
			<p className="mx-auto font-semibold text-lg sm:text-xl md:text-2xl">
				Io sono . . .
			</p>

			<div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
				{benefits.map((ben, id) => (
					<div key={id} className="flex gap-6 sm:gap-8">
						<p className="text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
							0{id + 1}
						</p>
						<div className="flex flex-col gap-6 sm:gap-8">
							<h3 className="text-2xl sm:text-3xl md:text-5xl">
								{ben.name}
							</h3>
							<p>{ben.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
