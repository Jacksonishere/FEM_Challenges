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
import CardsContextProvider from "./context/CardsContext";
import ProgressContextProvider from "./context/ProgressContext";

function App() {
	return (
		<>
			<div className="header-bg"></div>
			<OverlayContextProvider>
				<Overlay />
				<Header />
			</OverlayContextProvider>
			<TriggerContextProvider>
				<ProgressContextProvider>
					<ModalOverlayContextProvider>
						<CardsContextProvider>
							<main className="main">
								<ModalOverlay />
								<Pledge />
								<PledgeProgress />
								<PledgeInfo />
								<Modal />
							</main>
						</CardsContextProvider>
					</ModalOverlayContextProvider>
				</ProgressContextProvider>
			</TriggerContextProvider>
		</>
	);
}

export default App;
