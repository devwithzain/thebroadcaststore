import React, { useEffect, useRef } from "react";
import { Grid, Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Requestacall = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();
	const [contact, setContact] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		phoneNumber: "",
		product: "",
		budget: "",
		website: "",
		number: "",
		city: "",
		address: "",
		fax: "",
		compony: "",
		zipcode: "",
		title: "",
		spectialOptions: "",
	});
	const form = useRef();

	const contactChange = (e) => {
		let { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};
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
					console.log(result);
					navigate("/thankyou");
				},
				(error) => {
					console.log(error.text);
				},
			);
	};
	return (
		<Grid>
			<div
				id="about-ban"
				className="innerban">
				<Container>
					<div className="abtcontent">
						<h1
							className="heading"
							data-aos="fade-up">
							Request a Call
						</h1>
					</div>
				</Container>
			</div>

			<div id="form">
				<form
					ref={form}
					onSubmit={contactSubmit}>
					<Container>
						<div className="top-head">
							<Row>
								<Col>
									<div
										className="text-cn"
										data-aos="fade-up">
										<h3 className="sec-head">Request A Call</h3>
										<p className="para">
											Please fill out the form below and one of our
											knowledgeable sales engineers will get back to you as soon
											as possible.
										</p>
									</div>
								</Col>
							</Row>
						</div>
						<div className="form-content">
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											First Name <br />
											<input
												type="text"
												id=""
												value={contact.firstName}
												name="firstName"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Last Name <br />
											<input
												type="text"
												id=""
												value={contact.lastName}
												name="lastName"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											Title <br />
											<input
												type="text"
												id=""
												value={contact.title}
												name="title"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Company <br />
											<input
												type="text"
												id=""
												value={contact.compony}
												name="compony"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											Phone <br />
											<input
												type="number"
												id=""
												value={contact.phoneNumber}
												name="phoneNumber"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Fax <br />
											<input
												type="text"
												id=""
												value={contact.fax}
												name="fax"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											E-mail <br />
											<input
												type="email"
												id=""
												value={contact.email}
												name="email"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Address <br />
											<input
												type="text"
												id=""
												value={contact.address}
												name="address"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12">
									<div className="fields">
										<label>
											Country <br />
											<select
												name="country"
												id="country">
												<option value="usa">United States of America</option>
												<option value="uk">United Kingdom</option>
												<option value="canada">Canada</option>
												<option value="austrailya">Austrailia</option>
											</select>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											City <br />
											<input
												type="text"
												id=""
												value={contact.city}
												name="city"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											State <br />
											<select
												name="state"
												id="state">
												<option value="usa">Florida</option>
												<option value="uk">Alaska</option>
												<option value="canada">Texas</option>
											</select>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											Zip Code
											<br />
											<input
												type="number"
												id=""
												value={contact.zipcode}
												name="zipcode"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Website <br />
											<input
												type="text"
												id=""
												value={contact.website}
												name="website"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col>
									<div className="fields">
										<label>
											<input type="checkbox" />
											Sign-up for our E-Blast! Stay current on all the new items
											from Broadcast Store, and take advantage of E-Blast only
											special deals. It's sent via e-mail every week, and we
											never sell our list to anyone. Sign-up today!
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12">
									<div className="fields">
										<label>
											Your Interest <br />
											<select
												name="country"
												id="country">
												<option value="usa">AudioVisual Migration</option>
												<option value="uk">Lease/Finance</option>
												<option value="canada">Motion Capture</option>
												<option value="austrailya">Partner</option>
												<option value="austrailya">Plan to buy new</option>
												<option value="austrailya">Plan to buy used</option>
												<option value="austrailya">Service</option>
												<option value="austrailya">Want to Sell</option>
												<option value="austrailya">Want to Trade</option>
											</select>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											What is your time frame to purchase? <br />
											<select
												name="country"
												id="country">
												<option value="usa">AudioVisual Migration</option>
												<option value="uk">Lease/Finance</option>
												<option value="canada">Motion Capture</option>
												<option value="austrailya">Partner</option>
												<option value="austrailya">Plan to buy new</option>
												<option value="austrailya">Plan to buy used</option>
												<option value="austrailya">Service</option>
												<option value="austrailya">Want to Sell</option>
												<option value="austrailya">Want to Trade</option>
											</select>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											What is your budget for this item? <br />
											<input
												type="number"
												id=""
												cols="30"
												rows="10"
												value={contact.budget}
												name="budget"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12">
									<div className="fields">
										<label>
											Are there any special options you might need? <br />
											<textarea
												type="text"
												id=""
												cols="30"
												rows="10"
												value={contact.spectialOptions}
												name="spectialOptions"
												onChange={contactChange}
											/>
										</label>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12">
									<div className="fields radio-btns">
										<label>
											Will this need to integrate with an existing project or
											system? <br />
										</label>
										<input
											type="radio"
											name="product"
											id=""
											value={contact.product}
											onChange={contactChange}
										/>
										Yes
										<input
											type="radio"
											name="product"
											id=""
											value={contact.product}
											onChange={contactChange}
										/>
										No
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs="12">
									<div className="fields">
										<label>
											Comments <br />
											<textarea
												type="text"
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
									<div className="btns">
										<input
											type="submit"
											value="Send"
											className="theme-btn"
										/>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</form>
			</div>
		</Grid>
	);
};

export default Requestacall;
