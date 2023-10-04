import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { options } from "./assets/particles";

import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	const particlesInit = useCallback(async engine => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);

	return (
		<div id="home">
			<Menu />
			<Home />
			<Projects />
			<About />
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={options}
				className="-z-10"
			/>
			<Footer />
		</div>
	);
}

export default App;
