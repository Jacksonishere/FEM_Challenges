import { useState } from "react";

import Header from "./components/Header";
import Pledge from "./components/Pledge";
import PledgeProgress from "./components/PledgeProgress";
import PledgeInfo from "./components/PledgeInfo";
import Modal from "./components/Modal";
import { triggerContext } from "./customHooks/triggerContext";

function App() {
	const [toggleOverlay, setToggleOverlay] = useState(false);

	const triggerOverlay = (toggle) => {
		setToggleOverlay(toggle);
	};

	const [toggleModal, setToggleModal] = useState(false);
	return (
		<>
			<div className="header-bg"></div>
			<div className={`overlay ${toggleOverlay ? "show" : ""}`}></div>

			<triggerContext.Provider value={{ toggleModal, setToggleModal }}>
				<Header triggerOverlay={triggerOverlay} />
				<main className="main">
					<Pledge />
					<PledgeProgress />
					<PledgeInfo />
					<Modal />
				</main>
				{/* {toggleModal ? <Modal />: console.log("error")} */}
			</triggerContext.Provider>
		</>
	);
}

export default App;
