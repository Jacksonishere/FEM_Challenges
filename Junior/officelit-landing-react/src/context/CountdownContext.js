import React from "react";
import { createContext, useEffect, useState, useRef } from "react";

export const CountdownContext = createContext();

const CountdownContextProvider = (props) => {
	const endtime = useRef(new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000));

	const [remaining, setRemaining] = useState({days: 15, hours: 0, minutes: 0, seconds: 0});

	const getTimeRemaining = (intervalID) => {
		const total = Date.parse(endtime.current) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

        if(total > 0) {
            setRemaining({days, hours, minutes, seconds});
        }
        else{
            clearInterval(intervalID);
        }
	};

	useEffect(() => {
		const timer = setInterval(() => {
            // setRemaining(getTimeRemaining());
            getTimeRemaining(timer);
        }, 1000);
        return () => clearInterval(timer);
	}, []);

	return <CountdownContext.Provider value={{remaining, setRemaining}}>{props.children}</CountdownContext.Provider>;
};

export default CountdownContextProvider;
