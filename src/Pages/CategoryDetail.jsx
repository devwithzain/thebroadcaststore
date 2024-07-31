import Aos from "aos";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Svg from "../component/Svg";
import Carousel from "../component/Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import sliderImg1 from "../assets/images/carousel1.png";
import sliderImg2 from "../assets/images/carousel2.png";
import sliderImg3 from "../assets/images/carousel5.png";
import sliderImg4 from "../assets/images/carousel4.png";
import productTextImg from "../assets/images/productTextImg.png";

function CategoryDetail() {
	const [title, setTitle] = useState("Category - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

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

	const { slug } = useParams();
	const [productCat, setProductCat] = useState([]);
	const [productCat1, setProductCat1] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [categorySelected, setCategorySelected] = useState(false);
	const [categoryName, setCategoryName] = useState("All Products");
	const tabsBoxRef = useRef(null);
	const [scrollLeft, setScrollLeft] = useState(0);

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

	useEffect(() => {
		Aos.init({ duration: 2000 });
		window.scrollTo(0, 0);
	}, []);

	const handleTabClick = (category) => {
		axios
			.get(
				`https://thebroadcaststore.co/admins/api/products/category/${category.id}`,
			)
			.then((response) => {
				setProducts(response.data);
				setSelectedCategory(category);
				setCategoryName(category.title);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
		setCategorySelected(!categorySelected);
	};

	const handleIconClick = (direction) => {
		const tabsBox = tabsBoxRef.current;
		let newScrollLeft =
			tabsBox.scrollLeft + (direction === "left" ? -340 : 340);
		tabsBox.scrollLeft = newScrollLeft;
		setScrollLeft(newScrollLeft);
	};

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

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

	useEffect(() => {
		axios
			.get(`https://thebroadcaststore.co/admins/api/product/category/${slug}`)
			.then((response) => {
				setProductCat1(response.data);
			})
			.catch((error) => {
				console.error("Error fetching category:", error);
			});
	}, [slug]);

	useEffect(() => {
		const category = productCat.find((cat) => cat.slug === slug);
		if (category) {
			setCategoryName(category.title);
		}
	}, [slug, productCat]);

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
						Products
					</h1>
				</div>
			</div>
			<div className="category">
				<h1
					className="product-heading aos-init aos-animate"
					data-aos="fade-up">
					Categories
				</h1>
				<div className="wrapper">
					<div
						className="icon"
						onClick={() => handleIconClick("left")}>
						<MdKeyboardArrowLeft
							size={10}
							className="i"
						/>
					</div>
					{
						<ul
							className="tabs-box"
							ref={tabsBoxRef}>
							{productCat.map((category, index) => (
								<Link
									to={`/product/${category.slug}`}
									className={`tab ${category.slug === slug ? "active" : ""}`}
									key={category.id}
									onClick={() => handleTabClick(category)}>
									{category.title}
								</Link>
							))}
						</ul>
					}

					<div
						className="icon"
						onClick={() => handleIconClick("right")}>
						<MdKeyboardArrowRight
							size={10}
							className="i"
						/>
					</div>
				</div>
			</div>
			{/* asd */}
			<Grid
				className="ft-products brd-line"
				id="all-pro">
				<Container>
					<div className="ft-pro-head">
						<Row className="products-heading">
							<Col>
								<div data-aos="fade-up">
									<h2 className="heading">{categoryName}</h2>
								</div>
							</Col>
							<Col
								xs={6}
								className="button-container">
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
					<>
						<div className="products-container">
							{productCat1.map((product) => (
								<div
									className="ftrd-slide"
									key={product.id}>
									<div className="ftrd-pro">
										<div className="product">
											<h4 className="title">{product.title}</h4>
											<p className="sku">SKU# {product.sku}</p>
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
						<Svg />
					</>
				</Container>
			</Grid>
		</>
	);
}

export default CategoryDetail;
