// import { useState, useContext } from "react";

import Header from "./components/Header";
import Pledge from "./components/Pledge";
import PledgeProgress from "./components/PledgeProgress";
import PledgeInfo from "./components/PledgeInfo";
import Modal from "./components/Modal";

import Overlay from "./components/subcomponents/Overlay";
import ModalOverlay from "./components/subcomponents/ModalOverlay";

import TriggerContextProvider from "./context/TriggerContext";
import OverlayContextProvider from "./context/OverlayContext";
import ModalOverlayContextProvider from "./context/ModalOverlayContext";

function App() {
	return (
		<>
			<div className="header-bg"></div>
			<OverlayContextProvider>
				<Overlay />
				<Header />
			</OverlayContextProvider>
			<ModalOverlayContextProvider>
				<TriggerContextProvider>
					<main className="main">
						<ModalOverlay />
						<Pledge />
						<PledgeProgress />
						<PledgeInfo />
						<Modal />
					</main>
				</TriggerContextProvider>
			</ModalOverlayContextProvider>
		</>
	);
}

export default App;
