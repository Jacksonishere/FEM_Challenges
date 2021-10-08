import React from "react";
import { Switch, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
//Components
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import GalleryPage from "./components/Gallery/GalleryPage";
import GallerySlider from "./components/Gallery/GallerySlider";
//Custom hook
import ScrollToTop from "./customHooks/ScrollToTop";

function App() {
	const location = useLocation();
	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<ScrollToTop />
				<Switch location={location} key={location.key}>
					<Route exact path="/">
						<Gallery />
					</Route>
					<Route path="/gallery/:id">
						<GalleryPage />
						<GallerySlider />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
