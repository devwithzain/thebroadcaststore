import AOS from "aos";
import "aos/dist/aos.css";
import { Grid, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Thankyou() {
	const [title, setTitle] = useState("Thankyou - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);
	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<Grid>
			<div
				id="about-ban"
				className="innerban thanks">
				<Container>
					<div className="abtcontent">
						<h1
							className="heading"
							data-aos="fade-up">
							Thank you for Your Purchase!
						</h1>
						<br />
						<h4>
							Thank you for your recent purchase and for reaching out to us!
							We've received your query and our team will be in touch with you
							shortly.
						</h4>
						<p>
							We appreciate your patience and look forward to assisting you.
						</p>
					</div>
				</Container>
			</div>
		</Grid>
	);
}
