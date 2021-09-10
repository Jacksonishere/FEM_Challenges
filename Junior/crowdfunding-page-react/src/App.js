import { useState } from "react";

import Header from "./components/Header";

function App() {
	const [toggleOverlay, setToggleOverlay] = useState(false);

	const triggerOverlay = (toggle) => {
		setToggleOverlay(toggle);
	}
	return (
		<>
			<Header triggerOverlay={triggerOverlay} />
			<div className={`overlay ${toggleOverlay ? "show" : ""}`}></div>
		</>
	);
}

export default App;
