import { Link, useNavigate } from "react-router-dom";
import MobileNav from "../../Pages/MobileNavbar";
import thebroadcastlogo from "../../assets/images/thebroadcastlogo.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Navbarheader() {
	const [productCat, setProductCat] = useState([]);
	const [topBrands, setTopBrands] = useState([]);

	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/all-category")
			.then((response) => {
				setProductCat(response.data);
			})
			.catch((error) => {
				console.error("Error fetching category:", error);
			});
	}, []);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/all-top-products")
			.then((response) => {
				setTopBrands(response.data);
			})
			.catch((error) => {
				console.error("Error fetching category:", error);
			});
	}, []);

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/search?q=${searchQuery}`);
	};

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<>
			<nav className="nav">
				<div className="navbars">
					<div className="left-col">
						<Link
							className="link"
							to="/">
							Home
						</Link>
						<Link
							className="link"
							to="/about">
							About Us
						</Link>
					</div>
					<div className="logo">
						<Link to="/">
							<img
								src={thebroadcastlogo}
								className="d-inline-block align-top"
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="right-col">
						<Link
							className="link"
							to="/product">
							Products
						</Link>
						<Link
							className="link"
							to="/contact">
							Contact
						</Link>
					</div>
				</div>
				<div className="topbar">
					<div className="search__main">
						<Row>
							<Col
								className="tp-width"
								xs={8}>
								<div className="header__form search-bar">
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
			</nav>
			<MobileNav />
		</>
	);
}
