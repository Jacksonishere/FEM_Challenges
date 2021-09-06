import React from "react";

import Bill from "./Bill";
import SelectTip from "./SelectTip";
import PeopleCount from "./PeopleCount";
import TipAmount from "./TipAmount";

const TipCalc = () => {
	return (
		<main className="main">
			<Bill />
            <SelectTip />
            <PeopleCount />
			<TipAmount />
		</main>
	);
};

export default TipCalc;
