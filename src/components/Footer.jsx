const Footer = () => {
	// aggiungere links
	return (
		<footer
			className="py-20 sm:py-32 bg-black border-t border-solid border-slate-550 flex flex-col gap-4 sm:gap-8 justify-center items-center"
			id="contacts"
		>
			<p className="px-4 py-2 bg-white text-slate-950 font-medium">
				Contattami &darr;
			</p>
			<div className="flex flex-col gap-4 items-center justify-center">
				<p>
					<b className="pr-2">Email</b>{" "}
					alessandro.fantaccino@gmail.com
				</p>
				<p>
					<b className="pr-2">GitHub</b>
					<a href=" " target="_blank" className="text-slate-400">
						Lorem, ipsum dolor.
						<sup className="">
							<span className="text-xs scale-75 pl-0.5">
								<i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
							</span>
						</sup>
					</a>
				</p>
				<p>
					<b className="pr-2">LinkedIn</b>
					<a href=" " target="_blank" className="text-slate-400">
						Lorem, ipsum dolor.
						<sup className="">
							<span className="text-xs scale-75 pl-0.5">
								<i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
							</span>
						</sup>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
