import React, { useContext } from "react";
import { TriggerContext } from "../../context/TriggerContext";
import { ModalOverlayContext } from "../../context/ModalOverlayContext";
import { CardsContext } from "../../context/CardsContext";

const RewardCard = ({ id }) => {
	const { setIdTrigger } = useContext(TriggerContext);
	const { setStatus } = useContext(ModalOverlayContext);
	const { cards } = useContext(CardsContext)

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
			<button
				className="select"
				onClick={(e) => {
					setIdTrigger(id);
					setStatus("show");
				}}>
				{card.remaining > 0 ? "Select Reward" : "Out of Stock"}
			</button>
		</div>
	);
};

export default RewardCard;
