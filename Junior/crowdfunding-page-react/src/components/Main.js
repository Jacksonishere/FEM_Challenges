import React from "react";

import Pledge from "./Pledge";
import PledgeProgress from "./PledgeProgress";
import PledgeInfo from "./PledgeInfo";
import Modal from "./Modal";

import ModalOverlay from "./subcomponents/ModalOverlay";

import ModalOverlayContextProvider from "../context/ModalOverlayContext";
import TriggerContextProvider from "../context/TriggerContext";
import CardsContextProvider from "../context/CardsContext";
import ProgressContextProvider from "../context/ProgressContext";

const Main = () => {
	return (
		<>
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
};

export default Main;
