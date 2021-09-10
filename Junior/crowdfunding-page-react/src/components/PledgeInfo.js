import React from "react";
import RewardCard from "./subcomponents/RewardCard";

const PledgeInfo = () => {
	return (
		<article className="container pledges">
			<section className="about">
				<h1>About this project</h1>
				<p>
					The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more
					comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and
					make you more comfortable while at work, helping you stay focused on the task at hand.
				</p>
				<p>
					Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to
					allow notepads, pens, and USB sticks to be stored under the stand.
				</p>
			</section>
			<section className="rewards">
				<RewardCard
					title="Bamboo Stand"
					price="25"
					desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
					remaining="101"
				/>
			</section>
		</article>
	);
};

export default PledgeInfo;
