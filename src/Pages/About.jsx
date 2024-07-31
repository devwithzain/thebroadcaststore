import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Button } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

import LogoMarquee from "../component/LogoMarquee";
import mediaImg from "../assets/images/mediaImg.png";
import systemImg from "../assets/images/systemImg.png";
import packagesImg from "../assets/images/packagesImg.png";
import aboutCameraImg from "../assets/images/aboutCameraImg.webp";
import aboutbackgroundText from "../assets/images/aboutbackgroundText.png";

export default function About() {
	const [title, setTitle] = useState("About - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);
	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);

		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, [title, description]);

	return (
		<Grid>
			<div className="innerban">
				<div className="contact-bannerText">
					<img
						src={aboutbackgroundText}
						alt="product-bannerText-Img"
						className="product-bannerText-Img"
					/>
					<h1
						class="contact-heading aos-init aos-animate"
						data-aos="fade-up">
						About Us
					</h1>
				</div>
				<p className="breadcum">Home . About Us</p>
			</div>
			<div id="abt-text-about">
				<div className="headcontent">
					<div className="innerContent">
						<div>
							<h3 className="sec-head">About Us</h3>
							<h4 className="sub-heading">
								Sell, Buy, Trade, Consign, and Service of New and Used
								Professional Equipment.
							</h4>
							<p className="para">
								The Broadcast Store or TheBroadcastStore.co has an extensive
								inventory of new & used professional audiovisual equipment
								available at a discounted price to our customers.
							</p>
							<p className="para">
								TheBroadcastStore.co is the premiere site to list consign, or
								trade your equipment. Whether rotating out your existing
								equipment, or clearing out your storage area,
								TheBroadcastStore.co can assist you in securing maximum value on
								your investments.
							</p>
							<p className="para">
								Our service department is second to none. We service all makes
								and models; digital, analog and HD.
							</p>
						</div>
					</div>
					<div className="image">
						<img
							src={aboutCameraImg}
							alt=""
							className="about-img"
						/>
					</div>
				</div>
			</div>
			<div id="abt-text-system">
				<div className="image">
					<img
						src={systemImg}
						alt=""
					/>
				</div>
				<div className="innerContent">
					<h3 className="sec-head">System Integration</h3>
					<p className="para">
						The Broadcast Store or TheBroadcastStore.co has an extensive
						inventory of new & used professional audiovisual equipment available
						at a discounted price to our customers.
					</p>
					<p className="para">
						TheBroadcastStore.co is the premiere site to list consign, or trade
						your equipment. Whether rotating out your existing equipment, or
						clearing out your storage area, TheBroadcastStore.co can assist you
						in securing maximum value on your investments.
					</p>
					<p className="para">
						Our service department is second to none. We service all makes and
						models; digital, analog and HD.
					</p>
				</div>
			</div>
			<div className="abt-flexdiv">
				<div className="row-1">
					<div className="col-1">
						<h2 className="sec-head">Large-Scale Media Migration</h2>
						<p className="para">
							TheBroadcastStore.co develops workflow solutions for large-scale
							media migration. We offer services with internal (your facility)
							or external (via our service bureau) media migration solutions.
						</p>
						<p className="para">
							Our digitization laboratory is capable of encoding into any format
							you choose, (Quicktime, JPEG-2000, MPEG-2/4, .AVI to name a few).
						</p>
						<p className="para">
							Entrust TheBroadcastStore.co to preserve your media for decades to
							come.
						</p>
						<p className="para">
							We welcome you to contact us with your needs, and see what we can
							do for you
						</p>
						<Button className="lrn-more abt-button">
							<Link
								to={"/large-scale-media-migration"}
								className="a">
								learn more <FaArrowRightLong />
							</Link>
						</Button>
					</div>
					<div className="col-2">
						<img
							src={mediaImg}
							alt="mediaImg"
						/>
					</div>
				</div>
				<div className="row-2">
					<div className="col-1">
						<div>
							<h3 className="sec-head">Production Packages</h3>
							<p className="para">
								Clients have always looked to TheBroadcastStore.co to provide
								them with guidance and access to the equipment to meet their
								specific shooting needs.
							</p>
							<p className="para">
								With the economy in a volatile state, getting quality equipment
								at the right price is more critical than ever.
							</p>
						</div>
						<div>
							<h3 className="sec-head">Sourcing Equipment</h3>

							<p className="para">
								If we don’t have it we can find it. TheBroadcastStore.co has
								built a pervasive network to assist in the sourcing of hard to
								find or unique items.
							</p>
						</div>
						<div>
							<div className="line-head">
								<h3 className="sec-head">Our Goal</h3>
							</div>

							<p className="para">
								Our professional staff is on hand is to ensure that our
								customers receive top notch service at reasonable rates. We are
								committed to you the customer, and want to make your experience
								with us a pleasant and lasting one.
							</p>
						</div>
					</div>
					<div className="col-2">
						<img
							src={packagesImg}
							alt="packagesImg"
						/>
					</div>
				</div>
			</div>
			<LogoMarquee />
		</Grid>
	);
}
