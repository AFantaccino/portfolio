const About = () => {
	const about = [
		{
			title: "Descrizione Personale",
			descr: "Mi chiamo Alessandro Fantaccino, ho 27 anni e sono orgogliosamente romano. La mia passione per la programmazione è sbocciata dopo aver completato la scuola superiore, quando ho scoperto il mondo affascinante della creazione di applicazioni e siti web. Fin dall'inizio, ho sentito che questo era il percorso giusto per me, e da allora ho dedicato ogni momento libero a imparare e crescere come sviluppatore web. La mancanza di esperienza lavorativa e di una laurea formale non mi ha mai scoraggiato; al contrario, ho considerato queste sfide come opportunità per dimostrare la mia determinazione e la mia dedizione all'apprendimento costante. La mia passione per la programmazione è cresciuta costantemente e ha alimentato la mia sete di conoscenza nel mondo dello sviluppo web."
		},
		{
			title: "Il mio approccio",
			descr: "Il mio approccio allo sviluppo web è una combinazione di curiosità insaziabile e creatività nell'affrontare le sfide. Ho compiuto passi significativi nel mio percorso formativo, completando con successo un corso approfondito su Angular. Questa esperienza mi ha fornito una solida base per la creazione di interfacce utente coinvolgenti e interattive. Tuttavia, non mi sono accontentato e ho continuato a cercare opportunità di apprendimento. Attualmente, sto dedicando tempo ed energia allo studio approfondito del stack MERN (MongoDB, Express.js, React e Node.js). Sto apprendendo non solo le basi, ma anche le sfumature di questo stack per diventare un web developer versatile e competente. Credo fermamente che ogni problema possa essere risolto con pazienza, perseveranza e un tocco di ingegno. Sono sempre alla ricerca di nuove sfide che mi consentano di crescere e di acquisire nuove competenze."
		},
		{
			title: "Obiettivo futuro",
			descr: "Guardando al futuro, il mio obiettivo è raggiungere l'eccellenza come web developer. Voglio diventare un professionista capace di contribuire in modo significativo a progetti innovativi che cambiano il modo in cui interagiamo con il mondo digitale. Per farlo, intendo approfondire le mie competenze tecniche, collaborare con mentori esperti del settore e lavorare su progetti che siano fonte di ispirazione. Allo stesso tempo, non voglio che il mio percorso sia solamente personale; spero di essere in grado di ispirare e guidare altri aspiranti sviluppatori a perseguire le proprie passioni e a superare le sfide che incontreranno nel mondo dello sviluppo web. Mi impegno a condividere le conoscenze e le esperienze che acquisirò lungo il mio cammino."
		},
		{
			title: "La mia passione",
			descr: "La mia passione per lo sviluppo web è intrinsecamente collegata alla gioia che provo nel creare qualcosa di significativo e funzionale. Non c'è niente di più gratificante per me che vedere un'idea astratta trasformarsi in un'applicazione interattiva che possa migliorare la vita delle persone. Trovo affascinante l'incessante evoluzione del campo dello sviluppo web e la sua capacità di reinventarsi costantemente. Sono affascinato dalle ultime tendenze, dagli standard in continua evoluzione e dalla sempre crescente complessità delle sfide che affrontiamo come sviluppatori."
		}
	];

	return (
		<div className="p-5 grid lg:grid-cols-2 gap-5">
			{about.map((camp, id) => (
				<div
					key={id}
					className="w-full lg:w-8/12 2xl:w-10/12 px-3 sm:px-6 py-6 m-auto rounded overflow-hidden shadow-lg bg-zinc-900 h-full"
				>
					<h2 className="font-bold text-xl my-3">{camp.title}</h2>
					<br />
					<p>{camp.descr}</p>
				</div>
			))}
		</div>
	);
};

export default About;
