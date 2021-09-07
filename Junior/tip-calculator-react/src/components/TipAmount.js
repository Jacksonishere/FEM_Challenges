import React from "react";
import Button from "./utility/Button";

const TipAmount = ({ total, tipPerc, numPpl, empty, reset }) => {
	const formatDollar = (value) => {
		return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
	};

	const totalPP = () => {
		const value = numPpl === 0 ? 0 : total / numPpl;
		return value;
	};

	const calcTipAmt = () => {
		const value = totalPP() * (tipPerc / 100);
		return value;
	};

	return (
		<section className="tip_amt">
			<p className="tip-person">
				<b>Tip Amount</b> <br />/ person
			</p>
			<p className="tip-per">{formatDollar(calcTipAmt())}</p>
			<p className="total-person">
				<b>Total</b> <br />/ person
			</p>
			<p className="total-per">{formatDollar(totalPP() + calcTipAmt())}</p>
			<Button
				text="RESET"
				btnClick={reset}
				disabled={Object.values(empty).includes(false) ? false : true}
			/>
		</section>
	);
};

export default TipAmount;
