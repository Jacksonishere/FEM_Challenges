import React from "react";
import { useState, useRef, useEffect } from "react";
import Button from "./utility/Button";

const SelectTip = ({ updateTip, didReset, updateReset }) => {
    const percInput = useRef(null);

	const [selectedBtn, setSelectedBtn] = useState(-1);
    useEffect( () => {
        if(didReset){
            setSelectedBtn(-1);
            percInput.current.value = "";
            updateReset();
        }
    })


	const btnClicked = (id) => {
		setSelectedBtn(id);
		percInput.current.value = "";
	};



    // if(didReset){
    //     updateReset();
    //     setSelectedBtn(-1);
    // }

    
	const preventMinus = (e) => {
		if (e.code === "Minus") {
			e.preventDefault();
			e.target.value = "";
		} else {
			updateTip(e.target.value === "" ? 0 : parseFloat(e.target.value));
		}
	};

	return (
		<section className="tip">
			<p>Select Tip %</p>
			<section className="select">
				<Button
					classname={selectedBtn === 0 ? "enabled" : ""}
					btnClick={() => {
						btnClicked(0);
						updateTip(5);
					}}
					text="5%"
				/>
				<Button
					text="10%"
					classname={selectedBtn === 1 ? "enabled" : ""}
					btnClick={() => {
						btnClicked(1);
						updateTip(10);
					}}
				/>
				<Button
					classname={selectedBtn === 2 ? "enabled" : ""}
					btnClick={() => {
						btnClicked(2);
						updateTip(15);
					}}
					text="15%"
				/>
				<Button
					classname={selectedBtn === 3 ? "enabled" : ""}
					btnClick={() => {
						btnClicked(3);
						updateTip(25);
					}}
					text="25%"
				/>
				<Button
					classname={selectedBtn === 4 ? "enabled" : ""}
					btnClick={() => {
						btnClicked(4);
						updateTip(50);
					}}
					text="50%"
				/>
				<label>
					<input
						ref={percInput}
						type="number"
						placeholder="Custom"
						// onKeyPress={preventMinus}
						onChange={(e) => {
							preventMinus(e);
							setSelectedBtn(-1);
						}}
					/>
				</label>
			</section>
		</section>
	);
};

export default SelectTip;
