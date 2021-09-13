import React from "react";
import RewardCard from "./subcomponents/RewardCard";

const PledgeInfo = () => {
	return (
		<article className="container pledges">
			<section className="about">
				<h2>About this project</h2>
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
					price={25}
					desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
					remaining={101}
					id={1}
				/>
				<RewardCard
					title="Black Edition Stand"
					price={75}
					desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
					member list. Shipping is included."
					remaining={64}
					id={2}
				/>
				<RewardCard
					title="
					Mahogany Special Edition"
					price={200}
					desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
					to our Backer member list. Shipping is included."
					remaining={0}
					id={3}
				/>

			</section>
		</article>
	);
};

export default PledgeInfo;
