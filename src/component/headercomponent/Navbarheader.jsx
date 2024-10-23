import { NavLink, useNavigate } from "react-router-dom";
import MobileNav from "../../Pages/MobileNavbar";
import thebroadcastlogo from "../../assets/images/thebroadcastlogo.webp";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropDown from "../DropDown";

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
						<NavLink
							className="link"
							to="/"
							activeClassName="active"
							style={({ isActive }) => ({
								fontWeight: isActive ? "bold" : "normal",
							})}>
							Home
						</NavLink>
						<NavLink
							className="link"
							to="/about"
							activeClassName="active"
							style={({ isActive }) => ({
								fontWeight: isActive ? "bold" : "normal",
							})}>
							About Us
						</NavLink>
					</div>
					<div className="logo">
						<NavLink to="/">
							<img
								src={thebroadcastlogo}
								className="d-inline-block align-top"
								alt="Logo"
							/>
						</NavLink>
					</div>
					<div className="right-col">
						<NavLink
							className="link"
							to="/product"
							activeClassName="active"
							style={({ isActive }) => ({
								fontWeight: isActive ? "bold" : "normal",
							})}>
							Product
						</NavLink>
						<DropDown />
						<NavLink
							className="link"
							to="/contact"
							activeClassName="active"
							style={({ isActive }) => ({
								fontWeight: isActive ? "bold" : "normal",
							})}>
							Contact
						</NavLink>
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
