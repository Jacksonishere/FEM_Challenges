import React, { useState, createContext } from "react";

export const CardsContext = createContext();

const CardsContextProvider = (props) => {
	const [cards, setCards] = useState([
		{
			title: "Pledge with no reward",
			desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
			// price: 0,
		},
		{
			title: "Bamboo Stand",
			price: 25,
			desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
			remaining: 101,
		},
		{
			title: "Black Edition Stand",
			price: 75,
			desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			remaining: 64,
		},
		{
			title: "Mahogany Special Edition",
			price: 200,
			desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
			remaining: 0,
		},
	]);

	return <CardsContext.Provider value={{ cards, setCards }}>{props.children}</CardsContext.Provider>;
};

export default CardsContextProvider;
