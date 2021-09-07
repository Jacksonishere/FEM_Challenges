import React from "react";
import Input from "./utility/Input";

const PeopleCount = ({updatePpl, num}) => {
	return (
		<>
			<Input value={num} inputType="Number of People" className="count_input" triggerEvent={updatePpl} />
		</>
	);
};

export default PeopleCount;
