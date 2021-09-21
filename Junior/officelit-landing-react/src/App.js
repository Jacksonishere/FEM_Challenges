import React from "react";
import { Switch, Route } from "react-router";

import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import CountdownContextProvider from "./context/CountdownContext";

const App = () => {
	return (
		<>
			<CountdownContextProvider>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
				</Switch>
			</CountdownContextProvider>
		</>
	);
};

export default App;
