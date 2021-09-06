import React from "react";

import Bill from "./Bill";
import SelectTip from "./SelectTip";
import PeopleCount from "./PeopleCount";
import TipAmount from "./TipAmount";

const TipCalc = () => {
	return (
		<main className="container tip_calc">
			<article className="container selection">
				<Bill />
				<SelectTip />
				<PeopleCount />
			</article>
			<article className="container display">
				<TipAmount />
			</article>
		</main>
	);
};

export default TipCalc;
