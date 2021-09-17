import React, { useContext, useRef, useEffect, useState } from "react";
import { TriggerContext } from "../../context/TriggerContext";
import { CardsContext } from "../../context/CardsContext";
import { ProgressContext } from "../../context/ProgressContext";

const PledgeCard = ({ id, successHandler }) => {
	//for triggering card, giving it the green accents when selected
	const { idTrigger, setIdTrigger } = useContext(TriggerContext);
	const selectedCard = useRef();
	//hidden form until a card is selected
	const hidden = useRef();

	//Use cards from card context to display info and to set the remaining for when the form is successful
	const { cards, setCards } = useContext(CardsContext);
	const card = cards[id];

	//Ref that persists, that holds the previous scrollTimeout that gets added when the user clicks on select reward outside the modal and inside the modal.
	const scrollTimeout = useRef();

	useEffect(() => {
		if (idTrigger === id) {
			scrollTimeout.current = setTimeout(() => {
				selectedCard.current.scrollIntoView({ behavior: "smooth" });
			}, 350);
		}

		return () => {
			clearTimeout(scrollTimeout.current);
		};
	}, [idTrigger]);

	const [invalid, setInvalid] = useState(false);
	const formInput = useRef();

	const { progress, setProgress } = useContext(ProgressContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		const submittedInput = formProps.amount;

		if (isNaN(submittedInput) || submittedInput < card.price) {
			setInvalid(true);
		} else {
			if (id > 0) {
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
			successHandler();
		}
	};

	return (
		<div
			ref={selectedCard}
			className={`pledge-card ${card.remaining === 0 ? "oos" : ""} ${idTrigger === id ? "selected" : ""}`}>
			<div
				className="top"
				onClick={(e) => {
					setIdTrigger(id);
				}}>
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

			<div
				className="hidden"
				ref={hidden}
				style={{ maxHeight: idTrigger === id ? hidden.current.scrollHeight : "0px" }}>
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
};

PledgeCard.defaultProps = {
	title: "",
	price: "",
	desc: "",
	remaining: "",
};

export default PledgeCard;
