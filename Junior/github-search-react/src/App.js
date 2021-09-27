import { useState, useEffect, useRef } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Bio from "./components/Bio";

function App() {
  const [User, setUser] = useState(null);


	const fetchUser = async (user) => {
		const res = await fetch(`https://api.github.com/users/${user}`)
    if(!res.ok){
      console.log("error");
      return;
    }
		const data = await res.json();
    const {avatar_url, name, login: userName, html_url: url, created_at, bio, public_repos, followers, following, location, blog, twitter_username: twitter, company } = data;

    const foundUser = {avatar_url, name, userName, url, created_at, bio, public_repos, followers, following, location, blog, twitter, company}

    console.log("Setting user")
    setUser(foundUser);

	};

  useEffect(() => {
    fetchUser("octocat");
    return () => {
    }
  }, [])

	return (
		<>
			<Header />
			<SearchBar fetch={fetchUser} />
      <Bio user={User} />
		</>
	);
}

export default App;
