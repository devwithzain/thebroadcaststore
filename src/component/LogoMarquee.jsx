import React from "react";
import { Grid } from "@mui/material";

import nikon from "../assets/images/nikon.webp";
import sonyy from "../assets/images/sonyy.webp";
import canon from "../assets/images/canon.webp";
import pentax from "../assets/images/pentax.webp";
import fujifilm from "../assets/images/fujifilm.webp";
import panasonic from "../assets/images/panasonic.webp";
import Slider from "react-slick";

export default function LogoMarquee() {
	var logos = {
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: false,
		cssEase: "linear",
		slidesToShow: 1,
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
	};
	return (
		<Grid className="partners-sec">
			<Slider {...logos}>
				<Grid className="slide-logo">
					<img
						src={panasonic}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={pentax}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={nikon}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={sonyy}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={canon}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={fujifilm}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={panasonic}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={pentax}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={nikon}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={sonyy}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={canon}
						alt=""
					/>
				</Grid>
				<Grid className="slide-logo">
					<img
						src={fujifilm}
						alt=""
					/>
				</Grid>
			</Slider>
		</Grid>
	);
}
