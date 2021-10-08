import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

const ResetClick = (dispatchAction) => {
	const domNode = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		domNode.current.onclick = () => {
			dispatch(dispatchAction());
		};
	},[]);

	return domNode;
};

export default ResetClick;
