import React from "react";
import company from "../assets/icon-company.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import location from "../assets/icon-location.svg";

const Bio = ({ user }) => {
	const convertDate = (date) => {
		const formattedDate = new Date(date);
		const newDate = formattedDate.toString().split(" ").slice(1, 4);
		return `${newDate[1]} ${newDate[0]} ${newDate[2]}`;
	};

	return (
		<>
			{user === null ? (
				<div>null user</div>
			) : (
				<div className="container bio">
					<img className="avatar" src={user.avatar_url} alt="" />
					<div className="profile">
						<h2>{user.name ?? user.userName}</h2>
						<a href={user.url}>@{user.userName}</a>
						<p>Joined {convertDate(user.created_at)}</p>
					</div>

					<p className="userbio">{user.Bio ?? "This profile has no bio"}</p>
					
					<ul className="stats">
						<li>
							<p>
								Repos <b>{user.public_repos}</b>
							</p>
						</li>
						<li>
							<p>
								Followers <b>{user.followers}</b>
							</p>
						</li>
						<li>
							<p>
								Following <b>{user.following}</b>
							</p>
						</li>
					</ul>
					<ul className="about">
						<li className="from">
							<img src={location} alt="" />
							<p>{user.location ?? "Unknown"}</p>
						</li>
						<li className={`blog ${user.blog ? "" : "unknown"}`}>
							<img src={website} alt="" />
							{user.blog ? <a href="/">{user.blog}</a> : <p>Nothing here!</p>}
						</li>
						<li className={`twitter ${user.twitter ? "" : "unknown"}`}>
							<img src={twitter} alt="" />
							{user.twitter ? <a href="/">{user.twitter}</a> : <p>Not Available</p>}
						</li>
						<li className="company">
							<img src={company} alt="" />
							<p>{user.company ?? "Unknown"}</p>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Bio;
