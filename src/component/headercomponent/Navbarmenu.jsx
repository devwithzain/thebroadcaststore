import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoStarSharp } from "react-icons/io5";

const Navbarmenu = () => {
	const [productCat, setProductCat] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		axios
			.get("https://thebroadcaststore.co/admins/api/all-category")
			.then((response) => {
				setProductCat(response.data);
			})
			.catch((error) => {
				console.error("Error fetching category:", error);
			});
	}, []);

	const handleCategorySelect = (category) => {
		axios
			.get(
				`https://thebroadcaststore.co/admins/api/products/category/${category.id}`,
			)
			.then((response) => {
				setProducts(response.data);
				setSelectedProduct(null); // Reset selected product when a category is selected
				setSelectedCategory(category); // Set the selected category
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	};

	const handleProductSelect = (product, event) => {
		event.preventDefault(); // Prevent default link behavior
		setSelectedProduct(selectedProduct === product ? null : product);
		window.history.pushState(null, null, `/${product.slug}`);
	};

	return (
		<div id="navbar">
			<div className="container">
				<Navbar expand="lg">
					<Container fluid>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="menubar"
								style={{ maxHeight: "100px" }}
								navbarScroll>
								<NavDropdown
									title="Product Categories"
									id="navbarScrollingDropdown">
									<NavDropdown.Item className="dropdown-hd">
										Categories
									</NavDropdown.Item>
									<div className="sidemenu">
										{productCat.map((category) => (
											<Link
												key={category.id}
												to={`/${category.slug}`}
												onClick={() => handleCategorySelect(category)}>
												{category.title}
											</Link>
										))}
									</div>
									<Link className="dropdown-hd">Top brands</Link>
									<div className="sidemenu">
										<Link to="/the-broadcast-store">Broadcast Store</Link>
										<Link to="/canon">Canon</Link>
										<Link to="/top-umatics">Umatics</Link>
										<Link to="/digital-beta-cam">Digital Betacam</Link>
										<Link to="/d1-tapes">D1</Link>
										<Link to="/d2">D2</Link>
										<Link to="/d3">D3</Link>
										<Link to="/D5">D5</Link>
										<Link to="/dv-cam">Dvcam</Link>
										<Link to="/hi8">Hi8</Link>
										<Link to="/top-svhs">Svhs</Link>
										<Link to="/top-super-betamax">Super Betamax</Link>
										<Link to="/top-digital-hi8-deck">Digital Hi8 deck</Link>
										<Link to="/top-monitor-with-sdi">Monitor with SDI</Link>

										<Link to="/top-tbc">TBC</Link>
										<Link to="/top-frame-synchronizer-converter">
											Frame Synchronizer/Converter
										</Link>
										<Link to="/professional-video-i-o-with-tb3">
											Professional Video I/O with TB3
										</Link>
										<Link to="/top-ntsc-signal-generator">
											NTSC Signal Generator
										</Link>
										<Link to="/top-vectorscope">Vectorscope</Link>
										<Link to="/waveform-monitors">Waveform Monitors</Link>
										<Link to="/encoder-decoder">Encoder/Decoder</Link>

										<Link to="/top-DVCPRO">DVCPRO HD</Link>
										<Link to="/track-recorder">24 Tracks Recorder </Link>
										<Link to="/top-hd-cam-editing-recorder">
											HD CAM Editing recorder{" "}
										</Link>
										<Link to="/inch1">1 Inch</Link>
										<Link to="/top-tape-playback">TapePlayback</Link>
										<Link to="/top-tape-cleaners">Tape Cleaners</Link>
									</div>

									<Link className="dropdown-hd">Top Models</Link>
									<Link to="/sony-bvu-950">Sony BVU-950</Link>
									<Link to="/quad-broadcast">
										2" Quad broadcast Editor and Player
									</Link>
								</NavDropdown>
								<Link to="/">Home</Link>
								<Link to="/about">About Us</Link>

								<Link to="#action1">New Product Catalog</Link>
							</Nav>

							<div className="btns">
								<Button className="theme-btn">
									<Link to="/contact">Contact Us</Link>
								</Button>
							</div>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>

			{/* Render "About Us" section when a category is selected */}
			{selectedCategory && !selectedProduct && (
				<Container>
					<div className="abtcontent">
						<h1
							className="heading"
							data-aos="fade-up">
							{selectedCategory.title}
						</h1>
					</div>
				</Container>
			)}

			{/* Render products based on the selected category */}
			{!selectedProduct ? (
				<div className="products">
					<Grid className="all-prod-sec inn-pg-prod">
						<Container>
							<Grid
								container
								spacing={2}>
								{products.map((product) => (
									<Grid
										item
										xs={3}
										key={product.id}>
										<Grid className="ftrd-slide">
											<Grid className="ftrd-slide-blk">
												<Grid className="prod-img">
													<Typography variant="h6">-20%</Typography>
													<img
														src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
														alt={product.title}
														className="product-image" // Add a class for styling
													/>
												</Grid>
												<Grid className="pro-disp">
													<Grid className="prod-sku">
														<Typography variant="body">SKU#</Typography>
														<Typography variant="body">
															{product.sku}
														</Typography>
													</Grid>
													<Typography variant="h5">{product.title}</Typography>
													<p className="body">{product.short_desc}</p>{" "}
													{/* Render HTML content */}
													<Button className="theme-btn">
														<Link
															to={`/${product.slug}`}
															onClick={(event) =>
																handleProductSelect(product, event)
															}
															className="product-link" // Add a class for styling
														>
															Read More
														</Link>
													</Button>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								))}
							</Grid>
						</Container>
					</Grid>
				</div>
			) : (
				<div
					id="product"
					className="selected-product">
					<Container>
						<div className="pro-inner">
							<Row>
								<Col xs="6">
									<div className="image">
										<img
											src={`https://thebroadcaststore.co/admins/public/${selectedProduct.img_path}`}
											alt={selectedProduct.title}
										/>
									</div>
								</Col>
								<Col xs="6">
									<div className="innerContent">
										<h3 className="sec-head">{selectedProduct.title}</h3>
										<p className="para">{selectedProduct.short_desc}</p>

										<p className="price">${selectedProduct.price}</p>
										<div className="meta">
											{/* Assuming you have a 'rating' field in your product data */}
											<div className="rating">
												{Array.from(
													{ length: selectedProduct.rating },
													(_, index) => (
														<IoStarSharp key={index} />
													),
												)}
											</div>
										</div>
										<Button className="theme-btn">
											<Link to="/Enquiry">Send Enquiry</Link>
										</Button>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
					<Container>
						<div className="headcontent">
							<Row>
								<Col xs="12">
									<div
										className="innerContent"
										data-aos="fade-right">
										<h3 className="sec-head">Model Details</h3>
										<p
											className="para"
											dangerouslySetInnerHTML={{
												__html: selectedProduct.long_desc,
											}}></p>{" "}
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			)}
		</div>
	);
};

export default Navbarmenu;
