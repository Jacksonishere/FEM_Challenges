import React from "react";
import Header from "../Header";
import Countdown from "../Countdown";   
import "../../styles/scss/signup/signup.scss";

const Signup = () => {
	return (
		<>
			<Header />
			<main className="main">
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
				<form className="" action="#">
					<input type="text" name="name" placeholder="Name" />
					<input className="email" type="text" name="email" placeholder="Email Address" />
					<label className="select">
						<select name="subscription">
							<option value="basic">Basic Pack Free</option>
							<option value="pro">Pro Pack $9.99</option>
							<option value="unlimited">Unlimited Pack $19.99</option>
						</select>
					</label>
					<input type="text" name="phone" placeholder="Phone Number" />
					<input type="text" name="company" placeholder="Company" />
                    <button type="submit">Get on the list</button>
				</form>

                </div>
			</main>
            <footer className="signup-footer">
                
            </footer>
		</>
	);
};

export default Signup;
