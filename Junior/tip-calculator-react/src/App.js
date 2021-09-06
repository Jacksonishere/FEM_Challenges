import images from "./images";
import Header from "./components/Header";
import TipCalc from "./components/TipCalc";

function App() {
	return (
		<>
      <Header logo={images.logo} />
      <TipCalc />
		</>
	);
}

export default App;
