import React, { useContext, useRef, useEffect, useState, useCallback } from "react";
import { CardsContext } from "../../context/CardsContext";
import { ProgressContext } from "../../context/ProgressContext";

import { connect } from "react-redux";
import { backProject, backBamboo, backBlack, backMahogany } from "../../redux";

const PledgeCard = React.forwardRef(({ id, back, backing, backAction }, ref) => {
	//Use cards from card context to display info and to set the remaining for when the form is successful
	console.log("rerendering pledgecard");
	const { cards, setCards } = useContext(CardsContext);
	const card = cards[id];

	const { progress, setProgress } = useContext(ProgressContext);

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

		if (isNaN(submittedInput) || submittedInput < card.price) {
			setInvalid(true);
		} else {
			if (back !== "project") {
				const updateCards = cards.map((card, index) => {
					if (id === index) {
						return { ...card, remaining: card.remaining - 1 };
					} else {
						return card;
					}
				});
				setCards(updateCards);
			}
			formInput.current.value = null;
			setInvalid(false);
			setProgress({
				total: progress.total + parseFloat(submittedInput),
				backers: progress.backers + 1,
			});
		}
	};

	return (
		<div ref={ref} className={`pledge-card ${card.remaining === 0 ? "oos" : ""} ${back === backing ? "selected" : ""}`}>
			<div className="top" onClick={backAction}>
				<label className="custom-radio">
					<input type="radio" name="select" value="selected" />
					<span className="custom-radio-styles"></span>
				</label>
				<strong className="title">{card.title}</strong>
				{id !== 0 ? <p className="price">{`Pledge $${card.price} or more`}</p> : ""}
				<p className="desc">{card.desc}</p>
				{id !== 0 ? (
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
});

const mapStateToProps = (state) => {
	return {
		backing: state.modal.backing,
	};
};

const mapDispatchToProps = (dispatch, { back }) => {
	switch (back) {
		case "project":
			return {
				backAction: () => dispatch(backProject()),
			};
		case "bamboo":
			return {
				backAction: () => dispatch(backBamboo()),
			};
		case "black":
			return {
				backAction: () => dispatch(backBlack()),
			};
		case "mahogany":
			return {
				backAction: () => dispatch(backMahogany()),
			};
		default:
			return {
				backAction: null,
			};
	}
};

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PledgeCard);
