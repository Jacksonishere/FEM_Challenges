import React from "react";

const PledgeCard = ({ title, price, desc, remaining, first }) => {
	return (
		<div className="pledge-card">
			<div className="top">
				<label className="custom-radio">
					<input type="radio" name="select" value="selected" />
					<div className="custom-radio-styles"></div>
				</label>

				<strong className="title">{title}</strong>

				{first !== true ? <p className="price">{`Pledge $${price} or more`}</p> : console.log("not first")}
				<p className="desc">{desc}</p>
				{first !== true ? (
					<div className="remaining">
						<b>{remaining}</b>
						<span>left</span>{" "}
					</div>
				) : (
					console.log("not first")
				)}
			</div>

			{first !== true ? (
				<div className="hidden">
					<div className="hidden-content">
						<p>Enter your pledge</p>
						<form action="" className="pledge-amount">
							<label htmlFor="amount">
								<b>$</b>
							</label>
							<input id="amount" type="number" placeholder="" />
							<button type="submit">Continue</button>
						</form>
					</div>
				</div>
			) : (
				console.log("first")
			)}
		</div>
	);
};

PledgeCard.defaultProps = {
	title: "",
	price: "",
	desc: "",
	remaining: "",
	first: false,
};

export default PledgeCard;
