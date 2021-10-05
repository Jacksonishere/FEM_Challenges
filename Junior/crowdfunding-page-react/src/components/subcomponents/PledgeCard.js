import React, { useContext, useRef, useEffect, useState, useCallback } from "react";
import { CardsContext } from "../../context/CardsContext";
import { ProgressContext } from "../../context/ProgressContext";

import { connect, batch } from "react-redux";
import { backBack, backBamboo, backBlack, backMahogany, backThanks, updateProgress } from "../../redux";
import { updateBamboo, updateBlack, updateMahogany } from "../../redux";

const PledgeCard = React.forwardRef(
	({ id, back, backing, backAction, card, update, thankYou, updateProgress }, ref) => {
		const [hiddenHeight, setHiddenHeight] = useState(0);
		const hidden = useCallback((hiddenNode) => {
			if (hiddenNode != null) {
				setHiddenHeight(hiddenNode.scrollHeight);
			}
		}, []);

		const [invalid, setInvalid] = useState(false);
		const formInput = useRef();

		const handleSubmit = (e) => {
			e.preventDefault();
			const formData = new FormData(e.target);
			const formProps = Object.fromEntries(formData);

			const submittedInput = formProps.amount;

			if (submittedInput === "" || isNaN(submittedInput) || submittedInput < card.price) {
				setInvalid(true);
			} else {
				formInput.current.value = null;
				batch(() => {
					if (update) {
						update();
					}
					thankYou();
					updateProgress(parseFloat(submittedInput));
				});
			}
		};

		return (
			<div
				ref={ref}
				className={`pledge-card ${card.remaining === 0 ? "oos" : ""} ${back === backing ? "selected" : ""}`}>
				<div className="top" onClick={backAction}>
					<label className="custom-radio">
						<input type="radio" name="select" value="selected" />
						<span className="custom-radio-styles"></span>
					</label>
					<strong className="title">{card.title}</strong>
					{id !== "back" ? <p className="price">{`Pledge $${card.price} or more`}</p> : ""}
					<p className="desc">{card.desc}</p>
					{id !== "back" ? (
						<div className="remaining">
							<b>{card.remaining}</b>
							<span>left</span>{" "}
						</div>
					) : (
						""
					)}
				</div>

				<div className="hidden" ref={hidden} style={{ maxHeight: back === backing ? `${hiddenHeight}px` : "0px" }}>
					<div className={`hidden-content ${invalid ? "invalidForm" : ""}`}>
						<p>Enter your pledge</p>
						<form action="#" className="pledge-amount" onSubmit={handleSubmit}>
							<label htmlFor="amount">
								<b>$</b>
							</label>
							<input ref={formInput} id="amount" type="text" placeholder="" name="amount" />
							<p className="warning">Please enter a valid pledge</p>
							<button type="submit">Continue</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
);

const mapStateToProps = (state, { id }) => {
	return {
		backing: state.modal.backing,
		card: state.updatePledge[id],
	};
};

const mapDispatchToProps = (dispatch, { back }) => {
	let backAction;
	let update;
	switch (back) {
		case "back":
			backAction = () => dispatch(backBack());
			break;
		case "bamboo":
			update = () => dispatch(updateBamboo());
			backAction = () => dispatch(backBamboo());
			break;

		case "black":
			update = () => dispatch(updateBlack());
			backAction = () => dispatch(backBlack());
			break;

		case "mahogany":
			update = () => dispatch(updateMahogany());
			backAction = () => dispatch(backMahogany());
			break;

		default:
			backAction = null;
			break;
	}
	return {
		backAction: backAction,
		update: update,
		thankYou: () => dispatch(backThanks()),
		updateProgress: (amount) => dispatch(updateProgress(amount)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PledgeCard);
