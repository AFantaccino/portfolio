const Footer = () => {
	return (
		<footer className="p-1 text-center fixed inset-x-0 bottom-0 bg-zinc-900">
			<p>
				Questo portfolio è stato realizzato con React e stilizzato
				utilizzando Tailwind. Il codice sorgente è disponibile:&nbsp;
				<a
					href="https://github.com/AFantaccino/portfolio"
					target="_blank"
					className="underline"
				>
					qui
				</a>
			</p>
		</footer>
	);
};

export default Footer;
