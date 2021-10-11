//router
import { Switch, Route } from "react-router";
import { useLocation } from "react-router";
//components
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
	const location = useLocation();
	return (
		<>
			<Background />
			<Header />
			<Switch location={location} key={location.key}>
				<Route path="/:planet">
					<div>hi</div>
				</Route>
			</Switch>
		</>
	);
}

export default App;
