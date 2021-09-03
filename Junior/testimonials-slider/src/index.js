//image
const image = document.querySelector(".slider img");

//quote
const testimonial_quote = document.querySelector(".testimonial .quote");

//testiomee and his/her role
const testimonee = document.querySelector(".testimonee");
const testimonee_name = testimonee.querySelector("b");
const testimonee_role = testimonee.querySelector("span");

//left and right buttons
const showLeft = document.querySelector("#left-btn");
const showRight = document.querySelector("#right-btn");

//toggling the transitions
const toggleTransitions = () => {
	image.classList.toggle("sweepfromLevel");
	testimonial_quote.classList.toggle("sweepfromSide");
	testimonee.classList.toggle("sweepfromSide");
};

//toggle initial transition
toggleTransitions();

//clear timeout
let timeout;

let index = 0;
const testimonies = [
	{
		img: "/images/image-john.jpg",
		testimony:
			'" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
		name: "John Tarkpor",
		role: "Junior Front-end Developer",
	},
	{
		img: "/images/image-tanya.jpg",
		testimony:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
		name: "Tanya Sinclair",
		role: "UX Engineer",
	},
];

const alterButtons = (toggle) => {
	if (toggle === "disable") {
		showLeft.disabled = true;
		showRight.disabled = true;
	} else if (toggle === "enable") {
		showLeft.disabled = false;
		showRight.disabled = false;
	}
};

const setContent = (testimony_obj) => {
	const { img, testimony, name, role } = testimony_obj;
	image.src = img;
	testimonial_quote.firstChild.nodeValue = testimony;
	testimonee_name.firstChild.nodeValue = name;
	testimonee_role.firstChild.nodeValue = role;
};

const handleTimeout = () => {
    if(timeout){
        clearTimeout(timeout);
        timeout = null;

        console.log("cleared timeout");
    }
}



const changeSlider = (side) => {
	//in case timeout was set to make elements appear in again, clear it because we're going to
	handleTimeout();

	if (side === "left") {
		index--;
	} else {
		index++;
	}
	const currTestimony = testimonies[Math.abs(index % testimonies.length)];

	toggleTransitions();

	if (!testimonial_quote.classList.contains("sweepfromSide")) {
		timeout = setTimeout(() => {
			//change content
			setContent(currTestimony);

			toggleTransitions();
		}, 600);
	}
};

showLeft.addEventListener("click", () => {
	changeSlider("left");
});

showRight.addEventListener("click", () => {
	changeSlider("right");
});

//handle case when clicked then clicked again so that it only toggles once.

//only whne going back is an issue
