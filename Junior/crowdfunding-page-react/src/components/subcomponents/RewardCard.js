import React, { useContext } from "react";
import { TriggerContext } from "../../context/TriggerContext";

const RewardCard = ({ title, price, desc, remaining, id }) => {
	const { setIdTrigger } = useContext(TriggerContext);

	return (
		<div className="card">
			<strong className="title">{title}</strong>
			<p className="price">{`Pledge $${price} or more`}</p>
			<p className="desc">{desc}</p>
			<div className="remaining">
				<b>{remaining}</b>
				<span>left</span>{" "}
			</div>
			<button
				className="select"
				onClick={(e) => {
					setIdTrigger(id);
				}}>
				Select Reward
			</button>
		</div>
	);
};

export default RewardCard;
