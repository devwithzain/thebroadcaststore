import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ftlogo from "../../assets/images/ftlogo.png";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/search?q=${searchQuery}`);
	};

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className="topbar">
			<div className="container">
				<Row>
					<Col className="tp-width">
						<div className="logo">
							<Link to="/">
								<img
									src={ftlogo}
									alt=""
								/>
							</Link>
						</div>
					</Col>
					<Col
						className="tp-width"
						xs={8}>
						<div className="search-bar">
							<Form
								className="d-flex"
								onSubmit={handleSearchSubmit}>
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
									value={searchQuery}
									onChange={handleSearchInputChange}
								/>
								<Button
									className="product-link theme-btn"
									type="submit">
									Search
								</Button>
							</Form>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Topbar;
