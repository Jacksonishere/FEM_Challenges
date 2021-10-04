import React from "react";
import RewardCard from "./subcomponents/RewardCard";

import { connect, batch } from "react-redux";
import { backBamboo, backBlack, backMahogany } from "../redux";
import { toggleOn } from "../redux";

const PledgeInfo = ({ backBamboo, backBlack, backMahogany }) => {
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
				<RewardCard id={'bamboo'} back={backBamboo} />
				<RewardCard id={'black'} back={backBlack} />
				<RewardCard id={'mahogany'} back={backMahogany} />
			</section>
		</article>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		backBamboo: () => {
			batch(() => {
				dispatch(backBamboo());
				dispatch(toggleOn());
			});
		},
		backBlack: () => {
			batch(() => {
				dispatch(backBlack());
				dispatch(toggleOn());
			});
		},
		backMahogany: () => {
			batch(() => {
				dispatch(backMahogany());
				dispatch(toggleOn());
			});
		},
	};
};

export default connect(null, mapDispatchToProps)(PledgeInfo);
