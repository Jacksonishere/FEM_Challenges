import React, { useContext, useRef, useEffect, useState } from "react";
import { ModalOverlayContext } from "../context/ModalOverlayContext";
import { ProgressContext } from "../context/ProgressContext";

const PledgeProgress = () => {
	const { progress } = useContext(ProgressContext);
	const { status } = useContext(ModalOverlayContext);

	const prevStatus = useRef();
	const updatedProgress = useRef(progress);
	const scrollBackUp = useRef();

	const [pledged, setPleged] = useState(false);

	//because i dont want the progress value to update automatically, only when previous state was pledged. So, when the user clicks okay after complete submission and has a valid form, it will rerender and because every time status changes I update the prevstatus ref, the previous one has to be pledge.
	useEffect(() => {
		if (prevStatus.current === "pledged") {
			setTimeout(() => {
				scrollBackUp.current.scrollIntoView({ behavior: "smooth", block: "start" });
				setTimeout(() => {
					setPleged(true);
					updatedProgress.current = progress;
				}, 400);
			}, 350);
		} else {
			setPleged(false);
		}
		prevStatus.current = status;
	}, [status]);

	useEffect(() => {
		let unfade = setTimeout(() => {
			setPleged(false);
		}, 700);

		return () => {
			clearTimeout(unfade);
		};
	}, [pledged]);

	return (
		<article ref={scrollBackUp} className="container progress">
			<section className={`progress-backed ${pledged ? "fade" : ""}`}>
				<h1>${updatedProgress.current.total.toLocaleString()}</h1>
				<p>of $100,000 backed</p>
			</section>
			<section className={`progress-backers ${pledged ? "fade" : ""}`}>
				<h1>{updatedProgress.current.backers.toLocaleString()}</h1>
				<p>total backers</p>
			</section>
			<section className={`progress-days ${pledged ? "fade" : ""}`}>
				<h1>{"56"}</h1>
				<p>days left</p>
			</section>
			<div className={`progress-bar ${pledged ? "fade" : ""}`}>
				<div
					className="progress-bar-fill"
					style={{
						right: `${pledged ? 100 : 100 - Math.min(Math.round((updatedProgress.current.total / 100000) * 100), 100)}%`,
					}}></div>
			</div>
		</article>
	);
};

export default PledgeProgress;
