import React from "react";
import Header from "../Header";

import chart from "../../assets/home/illustration-charts.svg";
import Countdown from "../Countdown";

const Home = () => {
	return (
		<>
			<Header className="header-bg" />
			<main className="main home">
				<section className="container section-one">
					<figure className="chart">
						<img src={chart} alt="chart" />
					</figure>
					<div className="intro">
						<h1 className="title">A simple solution to complex tasks is coming soon</h1>
						<p className="description">
							Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
							collaboration platform built with an intuitive interface to improve productivity.
						</p>
						<a className="getStarted" href="/">
							Get Started
						</a>
					</div>
				</section>
				<ul className="container cards">
					<li className="card white">
						<div className="intro">
							<h2 className="tier">Basic</h2>
							<h1 className="price">Free</h1>
							<p className="subscription">Up to 5 users for free</p>
						</div>
						<ul className="perks">
							<li>Basic document collaboration</li>
							<li>2 gb storage</li>
							<li>Great security and support</li>
						</ul>
						<a href="/">Try for Free</a>
					</li>
					<li className="card blue">
						<div className="intro">
							<h2 className="tier">Pro</h2>
							<h1 className="price">$9.99</h1>
							<p className="subscription">Per user, billed monthly</p>
						</div>
						<ul className="perks">
							<li>All essential integrations</li>
							<li>50 gb storage</li>
							<li>More control and insights</li>
						</ul>
						<a href="/">Try for Free</a>
					</li>
					<li className="card white">
						<div className="intro">
							<h2 className="tier">Ultimate</h2>
							<h1 className="price">$19.99</h1>
							<p className="subscription">Per user, billed monthly</p>
						</div>
						<ul className="perks">
							<li>Robust work management</li>
							<li>100 gb storage</li>
							<li>VIP support</li>
						</ul>
						<a href="/">Try for Free</a>
					</li>
				</ul>
			</main>

			<footer className="footer">
				<section className="container content">
					<Countdown />
					<a href="/">Get Started</a>
				</section>
			</footer>
		</>
	);
};

export default Home;
