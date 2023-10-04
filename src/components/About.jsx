const About = () => {
	const benefits = [
		{
			name: "Intraprendenza e Motivazione Inarrestabile",
			description:
				"Come sviluppatore web autodidatta, ho dimostrato una determinazione incrollabile nel perseguire la mia passione per la programmazione. Nonostante la mancanza di esperienza lavorativa formale o di una laurea, ho investito energia e risorse significative per acquisire competenze tecniche di alto livello. La mia intraprendenza mi spinge costantemente a superare le sfide e a raggiungere nuovi traguardi."
		},
		{
			name: "Approccio Agile al Lavoro",
			description:
				"La mia esperienza di lavoro autonomo mi ha insegnato l'importanza dell'efficienza e della gestione del tempo. Ho sviluppato un approccio agile al lavoro, che mi permette di suddividere i progetti in compiti gestibili e di rispettare le scadenze. Questo approccio mi consente di mantenere un alto livello di produttività e di fornire risultati di qualità."
		},
		{
			name: "Problem-Solving Creativo",
			description:
				"Sono un pensatore creativo e un risolutore di problemi instancabile. Ogni progetto che affronto è un'opportunità per applicare la mia inventiva e la mia capacità di trovare soluzioni uniche a ostacoli tecnici. Ho imparato a trasformare le sfide in opportunità di apprendimento e crescita."
		}
	];

	const description =
		"Io sono un giovane di 27 anni residente a Roma, con una passione sfrenata per lo sviluppo web. Lavorare con il web non è solo un interesse per me, ma una vera e propria vocazione. La possibilità di creare esperienze digitali coinvolgenti e funzionali mi affascina profondamente. Nonostante la mancanza di una laurea formale o esperienza lavorativa nel settore, ho investito mesi su mesi nell'apprendimento autonomo delle tecnologie web. Ho sviluppato competenze solide in HTML, CSS e JavaScript, ed ho iniziato a esplorare framework e librerie come Reacte ed Angular per creare applicazioni web moderne e dinamiche.";

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
			<div className="text-center self-center px-6 sm:text-lg sm:w-4/5 md:text-xl lg:w-7/12">
				<p>{description}</p>
			</div>

			<div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:right-0 before:w-2/3 before:h-1.5 before:bg-slate-700 after:absolute after:bottom-0 after:left-0 after:w-2/3 after:h-1.5 after:bg-slate-700 py-4">
				<h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
					Perche' assumermi?
				</h3>
				<h6 className="text-large sm:text-xl md:text-2xl">
					Contributi chiave che posso offrire.
				</h6>
			</div>

			<div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
				{benefits.map((ben, id) => (
					<div key={id} className="flex gap-6 sm:gap-8 mx-3">
						<p className="text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
							0{id + 1}
						</p>
						<div className="flex flex-col gap-6 sm:gap-8">
							<h3 className="text-2xl sm:text-3xl md:text-5xl">
								{ben.name}
							</h3>
							<p className="sm:text-base md:text-lg">
								{ben.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
