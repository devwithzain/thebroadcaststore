import Aos from "aos";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom"; // Import useParams
import { useEffect, useState } from "react";
import { Container, Grid, Button } from "@mui/material";

import Carousel from "../component/Slider";
import sliderImg1 from "../assets/images/carousel1.webp";
import sliderImg2 from "../assets/images/carousel2.webp";
import sliderImg3 from "../assets/images/carousel5.webp";
import sliderImg4 from "../assets/images/carousel4.webp";
import productTextImg from "../assets/images/productTextImg.webp";
import Loader from "./Loader";

export default function Brand() {
	const { brandName } = useParams(); // Get brand name from URL
	const [title, setTitle] = useState(
		`Product - ${brandName.charAt(0).toUpperCase() + brandName.slice(1)}`,
	);
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);

	const imgItem = [
		{ id: 1, src: sliderImg1 },
		{ id: 2, src: sliderImg2 },
		{ id: 3, src: sliderImg3 },
		{ id: 4, src: sliderImg4 },
	];

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
		Aos.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, [title, description]);

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://thebroadcaststore.co/admins/api/all-products")
			.then((response) => {
				setProducts(response.data);
				// Filter products based on brand name when products are fetched
				const filtered = response.data.filter((product) =>
					product.title.toLowerCase().startsWith(brandName.toLowerCase()),
				);
				setFilteredProducts(filtered);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching featured products:", error);
			});
	}, [brandName]); // Depend on brandName to refetch when it changes

	return (
		<>
			<div className="carousel-container1">
				<Carousel
					slides={imgItem}
					autoSlide={true}
					autoSlideInterval={5000}
				/>
				<div className="contact-bannerText product-slider-text">
					<img
						src={productTextImg}
						alt="product-bannerText-Img"
						className="product-bannerText-Img"
					/>
					<h1
						className="contact-heading aos-init aos-animate product-slider-heading"
						data-aos="fade-up">
						All Products
					</h1>
				</div>
			</div>

			{loading ? (
				<Loader />
			) : (
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
										className="webkit-text products-bgtext">
										PRODUCTS
									</span>
									<div data-aos="fade-up">
										<h2 className="heading">{`${
											brandName.charAt(0).toUpperCase() + brandName.slice(1)
										} Products`}</h2>
									</div>
								</Col>
							</Row>
						</div>

						<div className="products-container">
							{filteredProducts.map((product) => (
								<div
									className="ftrd-slide"
									key={product.id}>
									<div className="ftrd-pro">
										<div className="product">
											<h4 className="title">{product.title}</h4>
											<div className="pro-image">
												<img
													src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
													alt=""
												/>
											</div>
											<p className="short-des">{product.short_desc}</p>
											<div className="price-btn">
												<p className="price">Call for Price</p>
												<Button className="lrn-more cart">
													<Link to={`/product-detail/${product.slug}`}>
														Learn More
													</Link>
												</Button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</Container>
				</Grid>
			)}
		</>
	);
}
