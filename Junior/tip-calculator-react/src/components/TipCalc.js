import React from "react";
import { useState, useRef } from "react";

import Bill from "./Bill";
import SelectTip from "./SelectTip";
import PeopleCount from "./PeopleCount";
import TipAmount from "./TipAmount";

const TipCalc = () => {
	const [total, setTotal] = useState(0);
	const updateTotal = (newTotal) => {
		if(isNaN(newTotal)){
			setTotal(0);
			setEmpty({...empty, total:true})
		}
		else{
			setTotal(newTotal);
			setEmpty({...empty, total:false})
		}
	};

	const [tipPerc, setTipPerc] = useState(0);
	const updatePerc = (newPerc) => {
		if(isNaN(newPerc)){
			setTipPerc(0);
			setEmpty({...empty, tipPerc:true})
		}
		else{
			setTipPerc(newPerc);
			setEmpty({...empty, tipPerc:false})
		}
	};

	const [numPpl, setNumPpl] = useState(0);
	const updateNumPpl = (newNumPpl) => {
		if(isNaN(newNumPpl)){
			setNumPpl(0);
			setEmpty({...empty, numPpl:true})
		}
		else{
			setNumPpl(newNumPpl);
			setEmpty({...empty, numPpl:false})
		}
	};

	const [empty, setEmpty] = useState({
		total: true,
		tipPerc: true,
		numPpl: true,
	});

	const [didReset, setDidReset] = useState(false);
	const updateReset = () => {
		setDidReset(false);
	}

	const resetAll = () => {
		setTotal(0);
		setTipPerc(0);
		setNumPpl(0);
		setEmpty({total: true,
			tipPerc: true,
			numPpl: true,
		})
		setDidReset(true);
	}
	console.log("Rerendering tipcalc");

	return (
		<main className="container tip_calc">
			<article className="container selection">
				<Bill price={total === 0 ? "" : total} updateTotal={updateTotal}  />
				<SelectTip didReset={didReset} updateReset={setDidReset} updateTip={updatePerc}  />
				<PeopleCount num={numPpl === 0 ? "" : numPpl} updatePpl={updateNumPpl}  />
			</article>
			<article className="container display">
				<TipAmount total={total} tipPerc={tipPerc} numPpl={numPpl} empty={empty} reset={resetAll} />
			</article>
		</main>
	);
};

export default TipCalc;
