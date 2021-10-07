import React from "react";
import { Switch, Route } from "react-router";

//Components
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/">
					<Gallery />
				</Route>
			</Switch>
		</>
	);
}

export default App;
