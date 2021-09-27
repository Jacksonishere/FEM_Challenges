import React, { useRef } from "react";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = ({ fetchUser, success, setFetchStatus }) => {
	const userInput = useRef();
	const timeout = useRef();

	const handleForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		if (formProps.username === "") {
			return;
		}

		setFetchStatus("fetching");
		clearTimeout(timeout.current);

		timeout.current = setTimeout(() => {
			fetchUser(formProps.username);
			userInput.current.value = null;
		}, 1400);
	};

	return (
		<form action="#" className="container search-form" onSubmit={handleForm}>
			<img src={searchIcon} alt="" />
			<input ref={userInput} type="text" name="username" placeholder="Search GitHub username..." />
			<p className={`error ${success !== "error" ? "" : "show"}`}>No results</p>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
