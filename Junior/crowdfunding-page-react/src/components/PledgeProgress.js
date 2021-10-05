import React, { useContext, useRef, useEffect, useState } from "react";

import { connect } from "react-redux";
import { unpledged } from "../redux";

const PledgeProgress = (state) => {
	const scrollBackUp = useRef();
	const progress = useRef(state.progress);

	const timeoutRef = useRef();

	useEffect(() => {
		if (state.pledged) {
			clearTimeout(timeoutRef.current);
			scrollBackUp.current.scrollIntoView({ behavior: "smooth" });

			timeoutRef.current = setTimeout(() => {
				progress.current = state.progress;
				state.unpledge();
			}, 1000);
		} else if (!state.pledged) {
		}
	}, [state.pledged]);

	return (
		<article ref={scrollBackUp} className="container progress">
			<section className={`progress-backed ${state.pledged ? "fade" : ""}`}>
				<h2>${progress.current.total.toLocaleString()}</h2>
				<p>of $100,000 backed</p>
			</section>
			<section className={`progress-backers ${state.pledged ? "fade" : ""}`}>
				<h2>{progress.current.backers.toLocaleString()}</h2>
				<p>total backers</p>
			</section>
			<section className={`progress-days ${state.pledged ? "fade" : ""}`}>
				<h2>{"56"}</h2>
				<p>days left</p>
			</section>
			<div className={`progress-bar ${state.pledged ? "fade" : ""}`}>
				<div
					className="progress-bar-fill"
					style={{
						right: `${state.pledged ? 100 : 100 - Math.min(Math.round((progress.current.total / 100000) * 100), 100)}%`,
					}}></div>
			</div>
		</article>
	);
};

const mapStateToProps = (state) => {
	return {
		pledged: state.pledged.pledged,
		progress: state.progress,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		unpledge: () => dispatch(unpledged()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PledgeProgress);
