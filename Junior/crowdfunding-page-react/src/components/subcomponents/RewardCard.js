import React, { useContext } from "react";
import { CardsContext } from "../../context/CardsContext";

const RewardCard = ({ id, back }) => {
	const { cards } = useContext(CardsContext);
	const card = cards[id];

	return (
		<div className={`card ${card.remaining > 0 ? "" : "oos"}`}>
			<strong className="title">{card.title}</strong>
			<p className="price">{`Pledge $${card.price} or more`}</p>
			<p className="desc">{card.desc}</p>
			<div className="remaining">
				<b>{card.remaining}</b>
				<span>left</span>{" "}
			</div>
			<button className="select" onClick={back}>
				{card.remaining > 0 ? "Select Reward" : "Out of Stock"}
			</button>
		</div>
	);
};

export default RewardCard;
