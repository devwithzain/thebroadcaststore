import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import { IoStarSharp } from "react-icons/io5";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Grid, Container, Button } from "@mui/material";

import Svg from "../component/Svg";
import React, { useState, useEffect } from "react";

import tech from "../assets/images/tech.png";
import cameraabt from "../assets/images/cameraabt.png";
import LogoMarquee from "../component/LogoMarquee";

export default function Home() {
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const [title, setTitle] = useState(
		"The BroadCast Store - Buy Professional Equipment for Video Production",
	);
	const [description, setDescription] = useState(
		"Broadcast Store provides a wide selection of professional audiovisual equipment at competitive prices, allowing customers to get top-notch service department.",
	);

	useEffect(() => {
		// Fetch featured products data
		axios
			.get("https://thebroadcaststore.co/admins/api/all-feature-products")
			.then((response) => {
				setFeaturedProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching category:", error);
			});

		// Set document title and meta description
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);

		// Initialize AOS and scroll to top
		AOS.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, [title, description]);

	var settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	var specification = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				specification: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				specification: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				specification: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Grid className="body-bg">
			{!selectedProduct && (
				<>
					<div id="hero-cameras">
						<div className="slider-main">
							<div className="head">
								<h1 data-aos="fade-up">CAMERA</h1>
							</div>
							<div className="head-stroke">
								<h1 data-aos="fade-down">CAMERA</h1>
							</div>
						</div>
					</div>

					<div
						id="About"
						className="brd-line">
						<div className="abt-content">
							<Row className="home-about">
								<Col>
									<div className="inner-column content">
										<h2 data-aos="fade-up">About us</h2>
										<h3 data-aos="fade-up">
											New and Used Professional Equipment.
										</h3>
										<p data-aos="fade-up">
											TheBroadcastStore or TheBroadcastStore.co has an extensive
											inventory of new & used professional audiovisual equipment
											available at a discounted price to our customers.
										</p>
										<p data-aos="fade-up">
											TheBroadcastStore.co is the premiere site to list consign,
											or trade your equipment. Whether rotating out your
											existing equipment, or clearing out your storage area,
											TheBroadcastStore.co can assist you in securing maximum
											value on your investments.
										</p>
										<p data-aos="fade-up">
											Our service department is second to none. We service all
											makes and models; digital, analog and HD.
										</p>
										<Button
											className="lrn-more"
											data-aos="fade-up">
											<Link to={"/about"}>learn More</Link>
										</Button>
									</div>
								</Col>
								<Col className="abt-cam-img">
									<div
										className="inner-column"
										id="aboutCamera">
										<img
											data-aos="flip-left"
											src={cameraabt}
											alt="cameraAboutImg"
										/>
									</div>
								</Col>
							</Row>
						</div>
					</div>

					<div
						id="feature-products"
						className="brd-line">
						<Container>
							<div className="ft-pro-head">
								<Row className="featured-products-text">
									<Col xs={6}>
										<span
											data-aos="fade-right"
											data-aos-offset="300"
											data-aos-easing="ease-in-sine"
											className="webkit-text small-hidden">
											BEST SELLER
										</span>
										<h2
											className="heading"
											data-aos="fade-up">
											Featured Products
										</h2>
									</Col>
									<Col className="button-container">
										<div className="button">
											<Button className="lrn-more">
												<Link to={"/product"}>
													Best Seller <FaArrowRightLong />
												</Link>
											</Button>
										</div>
									</Col>
								</Row>
							</div>
						</Container>
					</div>

					<div className="ft-products">
						<Slider {...settings}>
							{featuredProducts.map((product) => (
								<Grid
									className="ftrd-slide"
									key={product.id}>
									<Grid className="ftrd-pro">
										<div class="product">
											<h4 class="title">{product.title}</h4>
											<p class="sku">SKU# {product.sku}</p>
											<div class="pro-image">
												<img
													src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
													alt=""
												/>
											</div>
											<p class="short-des">{product.short_desc}</p>
											<div class="price-btn">
												<p class="price">Call for Price </p>
												<Button className="lrn-more cart">
													<Link to={`/product-detail/${product.slug}`}>
														learn More
													</Link>
												</Button>
											</div>
										</div>
									</Grid>
								</Grid>
							))}
						</Slider>
					</div>

					<div id="tech">
						<div className="tech-content">
							<span
								data-aos="fade-right"
								data-aos-offset="300"
								data-aos-easing="ease-in-sine"
								className="webkit-text">
								TECH SPECS
							</span>

							<div data-aos="fade-up">
								<h2 className="heading">Tech Specs</h2>
							</div>

							<Slider {...specification}>
								<div>
									<div className="tech-spec">
										<Row className="tech-space-col">
											<Col
												xs={4}
												className="tech-space-col-1">
												<div className="tech-inner ze">
													<h4>Zoom Extension</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner line-img"></div>
											</Col>
											<Col
												xs={3}
												className="tech-space-col-3">
												<div className="tech-inner ar">
													<h4>Aperture Range</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row classname="tech-space-col">
											<Col
												xs={4}
												className="fr-col tech-space-col-1">
												<div className="tech-inner fr ">
													<h4>Focus Ring</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner centerimg">
													<img
														src={tech}
														alt="tech"
													/>
												</div>
											</Col>
											<Col
												xs={3}
												className="fs-inner tech-space-col-3">
												<div className="tech-inner fs">
													<h4>Filter Size</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row className="tech-space-col">
											<Col xs={12}>
												<div className="tech-inner af-motr">
													<h4>AF Motor Type</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
									</div>
								</div>

								<div>
									<div className="tech-spec">
										<Row className="tech-space-col">
											<Col
												xs={4}
												className="tech-space-col-1">
												<div className="tech-inner ze">
													<h4>Zoom Extension</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner line-img"></div>
											</Col>
											<Col
												xs={3}
												className="tech-space-col-3">
												<div className="tech-inner ar">
													<h4>Aperture Range</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row className="tech-space-col">
											<Col
												xs={4}
												className="fr-col tech-space-col-1">
												<div className="tech-inner fr ">
													<h4>Focus Ring</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner centerimg">
													<img
														src={tech}
														alt="tech"
													/>
												</div>
											</Col>
											<Col
												xs={3}
												className="fs-inner tech-space-col-3">
												<div className="tech-inner fs">
													<h4>Filter Size</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row>
											<Col xs={12}>
												<div className="tech-inner af-motr">
													<h4>AF Motor Type</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
									</div>
								</div>

								<div>
									<div className="tech-spec">
										<Row className="tech-space-col">
											<Col
												xs={4}
												className="tech-space-col-1">
												<div className="tech-inner ze">
													<h4>Zoom Extension</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner line-img"></div>
											</Col>
											<Col
												xs={3}
												classname="tech-space-col-3"
												id="tech-space-col-3">
												<div className="tech-inner ar">
													<h4>Aperture Range</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row className="tech-space-col">
											<Col
												xs={4}
												className="fr-col tech-space-col-1">
												<div className="tech-inner fr ">
													<h4>Focus Ring</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
											<Col
												xs={5}
												className="tech-space-col-2">
												<div className="tech-inner centerimg">
													<img
														src={tech}
														alt="tech"
													/>
												</div>
											</Col>
											<Col
												xs={3}
												className="fs-inner tech-space-col-3">
												<div className="tech-inner fs">
													<h4>Filter Size</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
										<Row>
											<Col xs={12}>
												<div className="tech-inner af-motr">
													<h4>AF Motor Type</h4>
													<p>
														It is a long established fact that a reader will be
														distracted by the readable content of a page when
														looking at its layout.
													</p>
												</div>
											</Col>
										</Row>
									</div>
								</div>
							</Slider>
						</div>
						<div className="svg-bg">
							<Svg />
						</div>
					</div>
					<LogoMarquee />
					<Grid
						className="ft-products brd-line"
						id="all-pro">
						<Container>
							<div className="ft-pro-head">
								<Row className="products-heading">
									<Col>
										<span
											data-aos="fade-right"
											data-aos-offset="300"
											data-aos-easing="ease-in-sine"
											className="webkit-text">
											PRODUCTS
										</span>
										<div data-aos="fade-up">
											<h2 className="heading">All Products</h2>
										</div>
									</Col>
									<Col className="button-container">
										<div className="button">
											<Button className="lrn-more">
												<Link to={"/product"}>
													Best Seller <FaArrowRightLong />
												</Link>
											</Button>
										</div>
									</Col>
								</Row>
							</div>
							<div className="products-container">
								{featuredProducts.slice(0, 8).map((product) => (
									<div
										className="ftrd-slide"
										key={product.id}>
										<div className="ftrd-pro">
											<div class="product">
												<h4 class="title">{product.title}</h4>
												<p class="sku">SKU# {product.sku}</p>
												<div class="pro-image">
													<img
														src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
														alt=""
													/>
												</div>
												<p class="short-des">{product.short_desc}</p>
												<div class="price-btn">
													<p class="price">Call for Price </p>
													<Button className="lrn-more cart">
														<Link
															to={`/product-detail/${product.slug}`}
															// onClick={(event) =>
															// 	handleProductSelect(product, event)}
														>
															learn More
														</Link>
													</Button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<Svg />
						</Container>
					</Grid>
				</>
			)}
			{selectedProduct && (
				<div
					id="product"
					className="selected-product">
					<Container>
						<div className="pro-inner">
							<Row className="product-page-data">
								<Col
									xs="6"
									className="product-page-data-img">
									<div className="image">
										<img
											src={`https://thebroadcaststore.co/admins/public/${selectedProduct.img_path}`}
											alt={selectedProduct.title}
										/>
									</div>
								</Col>
								<Col
									xs="6"
									className="product-page-data-data">
									<div className="innerContent">
										<h3 className="sec-head">{selectedProduct.title}</h3>
										<p className="body">{selectedProduct.short_desc}</p>
										<p className="price">
											<Button className="theme-btn">
												<Link to="/contact">Contact Us</Link>
											</Button>
										</p>
										<div className="meta">
											<div className="rating">
												{Array.from(
													{ length: selectedProduct.rating },
													(_, index) => (
														<IoStarSharp key={index} />
													),
												)}
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
					<Container>
						<div id="pro-text"></div>
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
		</Grid>
	);
}
