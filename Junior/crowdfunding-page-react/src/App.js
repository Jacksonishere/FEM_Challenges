import { useState, useContext } from "react";

import Header from "./components/Header";
import Pledge from "./components/Pledge";
import PledgeProgress from "./components/PledgeProgress";
import PledgeInfo from "./components/PledgeInfo";
import Modal from "./components/Modal";

import Overlay from "./components/subcomponents/Overlay";
import PledgeOverlay from "./components/subcomponents/PledgeOverlay";

import TriggerContextProvider, { TriggerContext } from "./context/TriggerContext";
import OverlayContextProvider, { OverlayContext } from "./context/OverlayContext";

function App() {
	return (
		<>
			<div className="header-bg"></div>
			<OverlayContextProvider>
				<Overlay />
				<Header />
			</OverlayContextProvider>
			<TriggerContextProvider>
				<main className="main">
					<PledgeOverlay />
					<Pledge />
					<PledgeProgress />
					<PledgeInfo />
					<Modal />
				</main>
			</TriggerContextProvider>
		</>
	);
}

export default App;
