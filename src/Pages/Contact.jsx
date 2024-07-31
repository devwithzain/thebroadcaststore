import AOS from "aos";
import "aos/dist/aos.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import { Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";

import productTextImg from "../../src/assets/images/contactUsImg.webp";

export default function Contact() {
	const [title, setTitle] = useState("Contact - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);

	const form = useRef();

	const contactChange = (e) => {
		let { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const navigate = useNavigate();
	const [contact, setContact] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		phone: "",
	});

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	useEffect(() => {
		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, []);

	const contactSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_3ud3305",
				"template_olgw5cl",
				form.current,
				"TXf8_EOiW7GyEQ31O",
			)
			.then(
				(result) => {
					console.log(result.text);
					navigate("/thankyou");
				},
				(error) => {
					console.log(error.text);
				},
			);
	};
	return (
		<Grid>
			<div className="innerban-contact">
				<div className="contact-bannerText">
					<img
						src={productTextImg}
						alt="product-bannerText-Img"
						className="product-bannerText-Img"
					/>
					<h1
						class="contact-heading aos-init aos-animate"
						data-aos="fade-up">
						Contact Us
					</h1>
				</div>
				<div className="socials">
					<div className="box1">
						<div className="socials-icon">
							<a href="tel:7476095599">
								Phone # <br />
								747-609-5599
							</a>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="131"
							height="131"
							viewBox="0 0 131 131"
							fill="none">
							<path
								opacity="0.15"
								d="M122.884 91.2441C114.217 91.2441 104.828 89.7996 96.8837 86.9108H94.7171C92.5504 86.9108 91.106 87.633 89.6615 89.0774L73.7726 104.966C53.5504 94.133 36.2171 77.5219 26.106 57.2996L41.9948 41.4108C44.1615 39.2441 44.8837 36.3552 43.4393 34.1885C41.2726 26.2441 39.8282 16.8552 39.8282 8.18853C39.8282 4.57742 36.2171 0.966309 32.606 0.966309H7.32818C3.71707 0.966309 0.105957 4.57742 0.105957 8.18853C0.105957 76.0774 54.9949 130.966 122.884 130.966C126.495 130.966 130.106 127.355 130.106 123.744V98.4663C130.106 94.8552 126.495 91.2441 122.884 91.2441ZM14.5504 15.4108H25.3837C26.106 21.9108 27.5504 28.4108 28.9948 34.1885L20.3282 42.8552C17.4393 34.1885 15.2726 24.7996 14.5504 15.4108ZM115.662 116.522C106.273 115.8 96.8837 113.633 88.2171 110.744L96.8837 102.077C102.662 103.522 109.162 104.966 115.662 104.966V116.522Z"
								fill="url(#paint0_linear_70_2379)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_70_2379"
									x1="-2.69681"
									y1="15.9333"
									x2="137.623"
									y2="23.3929"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#04B4FF" />
									<stop
										offset="1"
										stop-color="#006BCD"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="box2">
						<div className="socials-icon">
							<a href="https://www.google.com/maps/search/?api=1&query=15500+W+Telegraph+Rd,+Unit+C26,+Santa+Paula,+CA+93060">
								Location <br />
								15500 W Telegraph Rd, Unit <br /> C26 Santa Paula, CA 93060
							</a>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="104"
							height="131"
							viewBox="0 0 104 131"
							fill="none">
							<g opacity="0.15">
								<path
									d="M52.0002 75.1461C47.4088 75.1461 42.9206 73.7846 39.103 71.2338C35.2855 68.683 32.31 65.0574 30.553 60.8155C28.7959 56.5737 28.3362 51.906 29.232 47.4029C30.1277 42.8998 32.3386 38.7634 35.5852 35.5168C38.8318 32.2702 42.9682 30.0593 47.4713 29.1636C51.9744 28.2678 56.6421 28.7276 60.8839 30.4846C65.1258 32.2416 68.7513 35.2171 71.3022 39.0346C73.853 42.8522 75.2145 47.3404 75.2145 51.9318C75.2071 58.0863 72.759 63.9867 68.407 68.3386C64.0551 72.6906 58.1547 75.1387 52.0002 75.1461ZM52.0002 38.0032C49.2454 38.0032 46.5524 38.8201 44.2619 40.3506C41.9713 41.8811 40.1861 44.0564 39.1319 46.6016C38.0776 49.1467 37.8018 51.9472 38.3392 54.6491C38.8767 57.351 40.2033 59.8328 42.1512 61.7808C44.0991 63.7287 46.581 65.0553 49.2829 65.5927C51.9847 66.1302 54.7853 65.8543 57.3304 64.8001C59.8755 63.7459 62.0509 61.9606 63.5814 59.6701C65.1119 57.3796 65.9288 54.6866 65.9288 51.9318C65.9251 48.2388 64.4564 44.6982 61.8451 42.0869C59.2338 39.4756 55.6931 38.0069 52.0002 38.0032Z"
									fill="white"
								/>
								<path
									d="M52.0002 130.86L12.833 84.6686C12.2888 83.975 11.7502 83.277 11.2173 82.5746C4.53024 73.7597 0.916294 62.9961 0.928743 51.9318C0.928743 38.3868 6.30947 25.3966 15.8872 15.8188C25.465 6.24108 38.4552 0.860352 52.0002 0.860352C65.5452 0.860352 78.5354 6.24108 88.1131 15.8188C97.6909 25.3966 103.072 38.3868 103.072 51.9318C103.082 62.9908 99.4702 73.749 92.7877 82.5607L92.783 82.5746C92.783 82.5746 91.3902 84.4039 91.1812 84.65L52.0002 130.86ZM18.632 76.98C18.632 76.98 19.7137 78.41 19.9598 78.7164L52.0002 116.505L84.0823 78.6653C84.2866 78.41 85.3777 76.9661 85.3777 76.9661C90.8433 69.7657 93.797 60.9716 93.7859 51.9318C93.7859 40.8495 89.3835 30.2212 81.5471 22.3848C73.7108 14.5485 63.0824 10.1461 52.0002 10.1461C40.9179 10.1461 30.2895 14.5485 22.4532 22.3848C14.6169 30.2212 10.2145 40.8495 10.2145 51.9318C10.203 60.9775 13.1601 69.777 18.632 76.98Z"
									fill="white"
								/>
							</g>
						</svg>
					</div>
					<div className="box3">
						<div className="socials-icon">
							<a href="mailto:suzy@thebroadcaststore.co">
								Email Us <br />
								suzy@thebroadcaststore.co
							</a>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="116"
							height="88"
							viewBox="0 0 116 88"
							fill="none">
							<path
								opacity="0.15"
								d="M108.555 0.526855H7.4439C5.52845 0.526855 3.69145 1.28777 2.33702 2.64219C0.98259 3.99662 0.22168 5.83362 0.22168 7.74908V79.9713C0.22168 81.8867 0.98259 83.7238 2.33702 85.0782C3.69145 86.4326 5.52845 87.1935 7.4439 87.1935H108.555C110.47 87.1935 112.307 86.4326 113.662 85.0782C115.016 83.7238 115.777 81.8867 115.777 79.9713V7.74908C115.777 5.83362 115.016 3.99662 113.662 2.64219C112.307 1.28777 110.47 0.526855 108.555 0.526855ZM102.994 79.9713H13.4383L38.7161 53.8269L33.5161 48.8074L7.4439 75.7824V13.238L52.33 57.9074C53.6832 59.2526 55.5137 60.0076 57.4217 60.0076C59.3297 60.0076 61.1602 59.2526 62.5134 57.9074L108.555 12.1185V75.313L81.9772 48.7352L76.8856 53.8269L102.994 79.9713ZM12.1745 7.74908H102.705L57.4217 52.7796L12.1745 7.74908Z"
								fill="#04b4ff"
							/>
						</svg>
					</div>
					<div className="box4">
						<div className="socials-icon">
							Note <br />
							By Appointments Only
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="131"
							viewBox="0 0 50 131"
							fill="none">
							<path
								opacity="0.15"
								d="M25 8.98535C20.6902 8.98535 16.557 10.6974 13.5095 13.7449C10.4621 16.7923 8.75 20.9256 8.75 25.2354C8.75 42.0135 14.8112 65.1697 18.37 77.2597C18.799 78.6798 19.679 79.9215 20.8767 80.7967C22.0745 81.672 23.5248 82.1331 25.0081 82.1104C26.488 82.1324 27.9349 81.6727 29.1307 80.8008C30.3266 79.9288 31.2066 78.6917 31.6381 77.276C35.1969 65.251 41.25 42.2166 41.25 25.2354C41.25 20.9256 39.5379 16.7923 36.4905 13.7449C33.443 10.6974 29.3098 8.98535 25 8.98535ZM0.625 25.2354C0.625 18.7707 3.19307 12.5708 7.76427 7.99962C12.3355 3.42843 18.5353 0.860352 25 0.860352C31.4647 0.860352 37.6645 3.42843 42.2357 7.99962C46.8069 12.5708 49.375 18.7707 49.375 25.2354C49.375 43.5166 42.9725 67.5991 39.43 79.5916C38.4989 82.6874 36.5894 85.398 33.9878 87.3169C31.3862 89.2359 28.2327 90.2599 25 90.2354C18.4106 90.2354 12.4712 86.0104 10.57 79.551C7.03562 67.5179 0.625 43.3297 0.625 25.2354ZM25 106.485C22.8451 106.485 20.7785 107.341 19.2548 108.865C17.731 110.389 16.875 112.455 16.875 114.61C16.875 116.765 17.731 118.832 19.2548 120.356C20.7785 121.879 22.8451 122.735 25 122.735C27.1549 122.735 29.2215 121.879 30.7452 120.356C32.269 118.832 33.125 116.765 33.125 114.61C33.125 112.455 32.269 110.389 30.7452 108.865C29.2215 107.341 27.1549 106.485 25 106.485ZM8.75 114.61C8.75 110.301 10.4621 106.167 13.5095 103.12C16.557 100.072 20.6902 98.3604 25 98.3604C29.3098 98.3604 33.443 100.072 36.4905 103.12C39.5379 106.167 41.25 110.301 41.25 114.61C41.25 118.92 39.5379 123.053 36.4905 126.101C33.443 129.148 29.3098 130.86 25 130.86C20.6902 130.86 16.557 129.148 13.5095 126.101C10.4621 123.053 8.75 118.92 8.75 114.61Z"
								fill="#04b4ff"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div id="form">
				<Container>
					<div className="form-content">
						<Row>
							<Col>
								<div
									className="text-cn"
									data-aos="fade-up">
									<h3 className="sec-head get-in-touch">Get in Touch</h3>
								</div>
							</Col>
						</Row>
						<form
							ref={form}
							onSubmit={contactSubmit}>
							<Row>
								<Col>
									<div className="fields">
										<label>
											First Name <br />
											<input
												onChange={contactChange}
												value={contact.firstName}
												name="firstName"
												type="text"
											/>
										</label>
									</div>
								</Col>
								<Col>
									<div className="fields">
										<label>
											Last Name
											<br />
											<input
												onChange={contactChange}
												value={contact.lastName}
												name="lastName"
												type="text"
											/>
										</label>
									</div>
								</Col>
							</Row>

							<Row>
								<Col>
									<div className="fields">
										<label>
											Your Email
											<br />
											<input
												onChange={contactChange}
												value={contact.email}
												name="email"
												type="email"
											/>
										</label>
									</div>
								</Col>
								<Col>
									<div className="fields">
										<label>
											Phone
											<br />
											<input
												onChange={contactChange}
												value={contact.phone}
												name="phone"
												type="number"
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="fields">
										<label>
											Your message (optional)
											<br />
											<textarea
												id=""
												cols="30"
												rows="10"
												value={contact.message}
												name="message"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="contact-btns">
										<div className="contact-flex-send">
											<input
												type="submit"
												value="Send"
												className="contact-theme-btn"
											/>
											<FaArrowRightLong className="contact-arrow" />
										</div>
									</div>
								</Col>
							</Row>
						</form>
					</div>
				</Container>
			</div>
		</Grid>
	);
}
