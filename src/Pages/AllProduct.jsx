import Aos from "aos";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Grid, Button } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Svg from "../component/Svg";
import Carousel from "../component/Slider";
import sliderImg1 from "../assets/images/carousel1.webp";
import sliderImg2 from "../assets/images/carousel2.webp";
import sliderImg3 from "../assets/images/carousel5.webp";
import sliderImg4 from "../assets/images/carousel4.webp";
import productTextImg from "../assets/images/productTextImg.webp";

export default function AllProduct() {
	const [title, setTitle] = useState("Product - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);

	const imgItem = [
		{
			id: 1,
			src: sliderImg1,
		},
		{
			id: 2,
			src: sliderImg2,
		},
		{
			id: 3,
			src: sliderImg3,
		},
		{
			id: 4,
			src: sliderImg4,
		},
	];

	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [productSelected, setProductSelected] = useState(false);

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
		Aos.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, [title, description]);

	useEffect(() => {
		axios
			.get("https://thebroadcaststore.co/admins/api/all-products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching featured products:", error);
			});
	}, []);

	const handleTabSelect = () => {
		window.history.pushState(null, null, `/product`);
	};
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
									<h2 className="heading">All Products</h2>
								</div>
							</Col>
						</Row>
					</div>
					<>
						<div className="products-container">
							{products.map((product) => (
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
												<p class="price">Call for Price </p>
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
					</>
				</Container>
			</Grid>
		</>
	);
}
