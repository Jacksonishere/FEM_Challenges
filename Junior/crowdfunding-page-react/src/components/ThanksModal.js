import React from "react";

const ThanksModal = () => {
	return (
		<div className={`container pledged-modal ${status === "pledged" ? "enabled" : ""}`}>
			<figure>
				<img src={check} alt="" />
			</figure>
			<h2>Thanks for your support!</h2>
			<p>
				Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an
				email once our campaign is completed.
			</p>
			<button
				onClick={() => {
					setStatus("hidden");
				}}>
				Got it!
			</button>
		</div>
	);
};

export default ThanksModal;
