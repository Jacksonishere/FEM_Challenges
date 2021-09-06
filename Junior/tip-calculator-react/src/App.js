import images from "./images";
import Header from "./components/Header";
import TipCalc from "./components/TipCalc";
import Attribution from "./components/utility/Attribution";

function App() {
	return (
		<>
      <Header logo={images.logo} />
      <TipCalc />
      <Attribution />
		</>
	);
}

export default App;
