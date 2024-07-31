import React, { useEffect } from "react";
import { Grid, Container, Button } from "@mui/material";
import serv1 from "../assets/images/service1.jpg";
import serv2 from "../assets/images/service2.jpg";
import { SlCallOut } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
const RepairService = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, []);
	return (
		<Grid>
			<div
				id="about-ban"
				className="innerban">
				<Container>
					<div className="abtcontent">
						<h1 className="heading">Repair & Service</h1>
					</div>
				</Container>
			</div>

			<div id="abt-text">
				<div className="repair-headcontent">
					<div
						className="innerContent"
						data-aos="fade-right">
						<h3 className="sec-head">Repair & Service</h3>
						<p className="para">
							Every piece of used equipment BCS sells must pass a rigorous set
							of quality checks. Any deficiencies are repaired before it leave
							our door.
						</p>
						<p className="para">
							This assures you, the buyer that anything you get from us meets or
							exceeds original manufacturers specs. We can also service your
							existing equipment at very competitive rates.{" "}
						</p>
						<p className="para">
							Analog or digital; SONY, JVC, Panasonic, etc… our technicians can
							handle it all. Call for a free quote on your particular needs.{" "}
						</p>
					</div>
					<div className="image">
						<img
							src={serv1}
							alt=""
							data-aos="zoom-out-up"
						/>
					</div>
				</div>
			</div>
			<div id="abt-text">
				<div className="repair-headcontent">
					<div className="image">
						<img
							src={serv2}
							alt=""
							data-aos="zoom-out-up"
						/>
					</div>
					<div
						className="innerContent"
						data-aos="fade-left">
						<h3 className="sec-head">Services Include</h3>
						<p className="para">
							<ul>
								<li>
									<FaRegCircleDot />
									Repair
								</li>
								<li>
									<FaRegCircleDot />
									Parts Order
								</li>
								<li>
									<FaRegCircleDot />
									Consultation{" "}
								</li>
								<li>
									<FaRegCircleDot />
									Installation
								</li>
								<li>
									<FaRegCircleDot />
									System design and integration.
								</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
			<div id="abt-text">
				<div
					className="headcontent"
					id="cta-info">
					<h2 className="sec-head">Service And Parts Order Rates:</h2>
					<div className="repair-headcontent">
						<div
							className="innerContent"
							data-aos="fade-right">
							<h3 className="sec-head">Labor Rates</h3>

							<p className="para">
								<ul className="rates">
									<li>
										<span className="rate">Standard Rates/ Estimate only</span>
										<br />
										<span className="description">
											(Los Angeles) $150.-/Hour, 1 Hour Minimum Estimate price
											is subject to change.
										</span>
									</li>
									<li>
										<span className="rate">Priority Rates/ Estimate only</span>
										<br />
										<span className="description">
											(Los Angeles) $200.-/Hour, 1 Hour Minimum
										</span>
									</li>
									<li>
										<span className="rate">Field Service Rates</span>
										<br />
										<span className="description">
											$250.-/Hour, 2 Hour Minimum including travel time
										</span>
									</li>
									<li>
										<span className="rate">Specialist day rate</span>
										<br />
										<span className="description">
											$1,600.-, 8 Hour including travel time
										</span>
									</li>
									<li>
										<span className="rate">Priority Specialist day rate</span>
										<br />
										<span className="description">
											$2,000.-, 8 Hour including travel time
										</span>
									</li>
									<li>
										<span className="rate">Standard Rates/ Estimate only</span>
										<br />
										<span className="description">
											(Los Angeles) $150.-/Hour, 1 Hour Minimum Estimate price
											is subject to change.
										</span>
									</li>
								</ul>
							</p>
						</div>
						<div
							className="innerContent cta-info"
							data-aos="fade-left">
							<h3 className="sec-head">
								{" "}
								Parts Order - Handling fee per invoice $50.-
							</h3>
							<p className="para">
								<ul className="ctaIcons">
									<li>
										<SlCallOut />
										747-609-5599
									</li>
									<li>
										<IoMailUnreadOutline />
										suzy@thebroadcaststore.co
									</li>
								</ul>
								<Button className="theme-btn">
									<Link href="/">request Information</Link>
								</Button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Grid>
	);
};

export default RepairService;
