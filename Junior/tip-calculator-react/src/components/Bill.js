import React from "react";

import Input from "./utility/Input";

const Bill = ({updateTotal, price}) => {
	console.log("rerendering bill");
	return (
		<>
			<Input value={price} inputType="Bill" className="Bill" triggerEvent={updateTotal} />
		</>
	);
};

export default Bill;
