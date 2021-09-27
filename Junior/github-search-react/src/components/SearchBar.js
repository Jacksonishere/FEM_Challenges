import React, { useRef } from "react";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = ({ fetch }) => {
	const userInput = useRef();

	const handleForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		fetch(formProps.username);
		userInput.current.value = null;
	};

	return (
		<form action="#" className="container search-form" onSubmit={handleForm}>
			<img src={searchIcon} alt="" />
			<input ref={userInput} type="text" name="username" placeholder="Search GitHub username..." />
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
