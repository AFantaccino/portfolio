const Home = () => {
	//finito?
	return (
		<main className="flex flex-col flex-1 p-6 lg:my-44">
			<section
				id="introPage"
				className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
			>
				<div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
					<h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
						Ciao! Sono
						<span className="text-slate-500"> Alessandro </span>
						Fantaccino
						<br />
						Junior Full Stack
						<span className="text-slate-500"> Developer</span>
					</h2>
					<p className="text-base sm:text-lg md:text-xl">
						Le mie{" "}
						<span className="text-slate-500">
							{" "}
							tecnologie preferite{" "}
						</span>
						includono JavaScript (React o Angular), TailwindCSS,
						Node.js + Express.js & Mongoose
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
