import React from "react";

const Header = ({logo}) => {
	return (
		<header className="header">
			<figure className="container logo">
				<img src={logo} alt="logo" />
			</figure>
		</header>
	);
};

export default Header;
