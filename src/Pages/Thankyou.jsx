import { Grid, Container } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Thankyou = () => {
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
};

export default Thankyou;
