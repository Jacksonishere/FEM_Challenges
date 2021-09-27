import { useState, useEffect, useRef } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Bio from "./components/Bio";

function App() {
	const [User, setUser] = useState(null);
	const [fetchStatus, setFetchStatus] = useState(null);
	const [success, setSuccess] = useState(null);
	const abortCont = useRef(null);

	const handleAbort = () => {
		if (abortCont.current !== null) {
			abortCont.current.abort();
		}
	};

	const fetchUser = async (user) => {
		handleAbort();

		abortCont.current = new AbortController();
		const res = await fetch(`https://api.github.com/users/${user}`, { signal: abortCont.current.signal });

		abortCont.current = null;
    
		if (!res.ok) {
			setFetchStatus("fetched");
			setSuccess("error");
			return;
		}
		const data = await res.json();
		const {
			avatar_url,
			name,
			login: userName,
			html_url: url,
			created_at,
			bio,
			public_repos,
			followers,
			following,
			location,
			blog,
			twitter_username: twitter,
			company,
		} = data;
		const foundUser = {
			avatar_url,
			name,
			userName,
			url,
			created_at,
			bio,
			public_repos,
			followers,
			following,
			location,
			blog,
			twitter,
			company,
		};

		setSuccess("success");
		setFetchStatus("fetched");
		setUser(foundUser);
	};

	useEffect(() => {
		fetchUser("octocat");
		return () => {
			handleAbort();
		};
	}, []);

	return (
		<>
			<Header />
			<SearchBar fetchUser={fetchUser} success={success} setFetchStatus={setFetchStatus} />
			{User !== null && <Bio user={User} fetchStatus={fetchStatus} />}
		</>
	);
}

export default App;
