import React, { useContext, useRef, useEffect } from "react";
import { TriggerContext } from "../../context/TriggerContext";

const PledgeCard = ({ title, price, desc, remaining, id }) => {
	console.log("rerending pledgecard");
	const { idTrigger, setIdTrigger } = useContext(TriggerContext);
	const card = useRef();
	const hidden = useRef();

	let scrollTimeout = null;

	useEffect(() => {
		if (idTrigger === id) {
			scrollTimeout = setTimeout(() => {
				card.current.scrollIntoView({ behavior: "smooth" });
			}, 300);
		}

		return () => {
			clearTimeout(scrollTimeout);
		};
	});

	return (
		<div ref={card} className={`pledge-card ${idTrigger === id ? "selected" : ""}`}>
			<div
				className="top"
				onClick={(e) => {
					setIdTrigger(id);
				}}>
				<label className="custom-radio">
					<input type="radio" name="select" value="selected" />
					<div className="custom-radio-styles"></div>
				</label>

				<strong className="title">{title}</strong>

				{id !== 0 ?? <p className="price">{`Pledge $${price} or more`}</p>}
				<p className="desc">{desc}</p>
				{id !== 0 ?? (
					<div className="remaining">
						<b>{remaining}</b>
						<span>left</span>{" "}
					</div>
				)}
			</div>

			<div
				className="hidden"
				ref={hidden}
				style={{ maxHeight: idTrigger === id ? hidden.current.scrollHeight : "0px" }}>
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
		</div>
	);
};

PledgeCard.defaultProps = {
	title: "",
	price: "",
	desc: "",
	remaining: "",
};

export default PledgeCard;
