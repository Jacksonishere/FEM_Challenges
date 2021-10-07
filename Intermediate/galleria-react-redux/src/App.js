import React from "react";
import { Switch, Route } from "react-router";

//Components
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import GalleryPage from "./components/Gallery/GalleryPage";
import GallerySlider from "./components/Gallery/GallerySlider";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Gallery />
				</Route>
				<Route path="/gallery/:id">
					<GalleryPage />
					<GallerySlider />
				</Route>
			</Switch>
		</>
	);
}

export default App;
