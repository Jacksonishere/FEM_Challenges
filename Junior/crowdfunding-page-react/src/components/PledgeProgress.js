import React from "react";
import { useContext } from "react/cjs/react.development";
import { ProgressContext } from "../context/ProgressContext";

const PledgeProgress = () => {
	const {progress} = useContext(ProgressContext);

	return (
		<article className="container progress">
			<section className="progress-backed">
				<h1>{progress.total}</h1>
				<p>of $100,000 backed</p>
			</section>
            <section className="progress-backers">
				<h1>{progress.backers}</h1>
				<p>total backers</p>
			</section>
            <section className="progress-days">
				<h1>{"56"}</h1>
				<p>days left</p>
			</section>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{right: `${100 - Math.min(Math.round((progress.total / 100000) * 100), 100)}%`}}></div>
            </div>
		</article>
	);
};

export default PledgeProgress;
