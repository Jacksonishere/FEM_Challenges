import React from "react";
import { Switch, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
//Components
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import GalleryPage from "./components/Gallery/GalleryPage";
import GallerySlider from "./components/Gallery/GallerySlider";
import GalleryModal from "./components/Gallery/GalleryModal";
//Custom hook
import ScrollToTop from "./customHooks/ScrollToTop";
//Redux
import { untoggleModal } from "./redux/modal/modalSlice";
import { useDispatch } from "react-redux";

function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	return (
		<>
			<Header />
			<GalleryModal />
			<AnimatePresence exitBeforeEnter onExitComplete={() => dispatch(untoggleModal())}>
				<Switch location={location} key={location.key}>
					<Route exact path="/">
						<Gallery />
					</Route>
					<Route path="/gallery/:id">
						<ScrollToTop />
						<GalleryPage />
						<GallerySlider />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
