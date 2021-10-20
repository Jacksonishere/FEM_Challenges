//components
import Header from "./components/Header";
import Carousel from "./components/Carousel";

import Discover from "./components/Discover";
import About from "./components/About";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Carousel />
				<Discover />
				<About />
			</main>
		</>
	);
}

export default App;
