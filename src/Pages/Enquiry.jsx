import AOS from "aos";
import "aos/dist/aos.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function Enquiry() {
	const [title, setTitle] = useState("Enquiry - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);
	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	const navigate = useNavigate();

	const [contact, setContact] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		phone: "",
	});
	const form = useRef();

	const contactChange = (e) => {
		let { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

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
			<div id="form">
				<Container>
					<div className="form-content">
						<Row>
							<Col>
								<div
									className="text-cn"
									data-aos="fade-up">
									<h3 className="sec-head">Get a Qoute</h3>
									<p className="para">
										Want to get in touch? We’d love to hear from you. Here’s how
										you can reach us..
									</p>
								</div>
							</Col>
						</Row>
						<form
							ref={form}
							onSubmit={contactSubmit}>
							<Row>
								<Col xs="6">
									<div className="fields">
										<label>
											First name <br />
											<input
												onChange={contactChange}
												value={contact.firstName}
												name="firstName"
												type="text"
											/>
										</label>
									</div>
								</Col>
								<Col xs="6">
									<div className="fields">
										<label>
											Last name <br />
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
								<Col xs="6">
									<div className="fields">
										<label>
											Email
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
								<Col xs="6">
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
											Your message
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
									<div className="btns">
										<input
											type="submit"
											className="theme-btn"
										/>
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
