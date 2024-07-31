import AOS from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import map from "../assets/images/los-ang.jpg";
import { Grid, Typography, Container } from "@mui/material";

export default function Locations() {
	const [title, setTitle] = useState("Locations - The BroadCast Store");
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
		window.scrollTo(0, 0);
	}, []);

	return (
		<Grid>
			<div
				id="about-ban"
				className="innerban">
				<Container>
					<div className="abtcontent">
						<h1 className="heading">Locations</h1>
					</div>
				</Container>
			</div>
			<Grid className="loc-sec">
				<Container>
					<Grid container>
						<Grid
							item
							xs={6}>
							<div className="location-txt">
								<Typography variant="h4">Los Angeles</Typography>
								<p>
									<b>Pickups by appointments only:</b>
								</p>
								<p>BroadcastStore.co</p>
								<p>
									15500 W Telegraph Rd, Unit C26<br></br>
									Santa Paula, CA 93060
								</p>
								<p>
									<Link to={"tel:7476095599"}>747-609-5599</Link>
								</p>
								<p>
									<Link to={"mailto:suzy@thebroadcaststore.co"}>
										suzy@thebroadcaststore.co
									</Link>
								</p>
							</div>
						</Grid>
						<Grid
							item
							xs={6}>
							<div className="map">
								<img
									src={map}
									alt=""
								/>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Grid>
		</Grid>
	);
}
