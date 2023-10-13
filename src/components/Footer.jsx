const Footer = () => {
	return (
		<footer
			className="pt-10 sm:pt-16 bg-neutral-950 border-t-2 border-solid border-slate-550 flex flex-col gap-4 sm:gap-8 justify-center items-center"
			id="contacts"
		>
			<p className="px-4 py-2 bg-white text-slate-950 font-medium">
				Contattami &darr;
			</p>
			<div className="flex flex-col gap-4 items-center justify-center mb-10">
				<p className="pr-2">
					Telefono {import.meta.env.VITE_PHONE_NUMBER}
				</p>
				<div className="pr-2 flex flex-col items-center gap-2 sm:flex-row">
					<p>Email </p>
					<p> {import.meta.env.VITE_EMAIL}</p>
				</div>
				<p className="pr-2">
					GitHub{" "}
					<a
						href="https://github.com/AFantaccino"
						target="_blank"
						className="text-slate-400"
					>
						AFantaccino
					</a>
				</p>
				<p className="pr-2">
					LinkedIn{" "}
					<a
						href="https://www.linkedin.com/in/alessandro-fantaccino-640185139/"
						target="_blank"
						className="text-slate-400"
					>
						alessandro-fantaccino
					</a>
				</p>
			</div>
			<div className="pr-2 flex flex-col text-center gap-2">
				<p>
					Codice sorgente del portolio{" "}
					<a
						href="https://github.com/AFantaccino/portfolio"
						target="_blank"
						className="text-slate-400"
					>
						qui
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
