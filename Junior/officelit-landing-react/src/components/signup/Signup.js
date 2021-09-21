import React, { useState } from "react";
import Header from "../Header";
import Countdown from "../Countdown";
import "../../styles/scss/signup/signup.scss";

const Signup = () => {
	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const [isInvalid, setisInvalid] = useState({
		name: false,
		email: false,
	});
	const handleForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		const { name, email } = formProps;

		console.log(validateEmail(email));
		setisInvalid({
			name: name === "",
			email: !validateEmail(email),
		});
	};

	return (
		<>
			<Header />
			<main className="signup-main">
				<div className="container">
					<section className=" section-one">
						{/* <div className="intro"> */}
						<h1 className="title">Work smarter. Save time.</h1>
						<p className="desc">
							Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers.
							We are moving into final development and getting ready for official launch soon.
						</p>
						{/* </div> */}
						<Countdown className="signup" />
					</section>
					<form className="" action="#" onSubmit={handleForm}>
						<label className={`${isInvalid.name ? "error" : ""}`}>
							<input type="text" name="name" placeholder="Name" />
						</label>
						<label className={`${isInvalid.email ? "error" : ""}`}>
							<input className="email" type="text" name="email" placeholder="Email Address" />
						</label>
						<label className="select">
							<select name="subscription">
								<option value="basic">Basic Pack Free</option>
								<option value="pro">Pro Pack $9.99</option>
								<option value="unlimited">Unlimited Pack $19.99</option>
							</select>
						</label>
						<label>
							<input type="text" name="phone" placeholder="Phone Number" />
						</label>
						<label>
							<input type="text" name="company" placeholder="Company" />
						</label>
						<button type="submit">Get on the list</button>
					</form>
				</div>
			</main>
			<footer className="signup-footer"></footer>
		</>
	);
};

export default Signup;
