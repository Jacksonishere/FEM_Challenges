//router
import { Switch, Route } from "react-router";
//components
import Background from "./components/Background";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Background />  
			<Header />
			<Switch>
				<Route path="/:planet">
					<div>hi</div>
				</Route>
			</Switch>
		</>
	);
}

export default App;
