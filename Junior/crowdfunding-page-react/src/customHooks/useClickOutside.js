import React from "react";
import { useRef, useEffect } from "react";

const useClickOutside = (handler) => {
	const domNode = useRef();

	useEffect(() => {
		let outsideClickHandler = (e) => {
			if (!domNode.current.contains(e.target)) {
				document.removeEventListener("mousedown", outsideClickHandler);
				handler();
			}
		};

		document.addEventListener("mousedown", outsideClickHandler);

		return () => {
			document.removeEventListener("mousedown", outsideClickHandler);
		};
	});
	return domNode;
};

export default useClickOutside;
