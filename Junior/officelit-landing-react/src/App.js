import React from "react";
import { Switch, Route } from "react-router";

import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
			</Switch>
		</>
	);
};

export default App;
