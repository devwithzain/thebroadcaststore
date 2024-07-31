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

export default function Product() {
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

	const tabsBoxRef = useRef(null);
	const [products, setProducts] = useState([]);
	const [topBrands, setTopBrands] = useState([]);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [productCat, setProductCat] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [productSelected, setProductSelected] = useState(false);
	const [selectedTab, setSelectedTab] = useState("allProducts");
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [categorySelected, setCategorySelected] = useState(false);
	const [categoryName, setCategoryName] = useState("All Products");

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
			.get("https://thebroadcaststore.co/admins/api/all-feature-products")
			.then((response) => {
				setFeaturedProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching featured products:", error);
			});
	}, []);

	useEffect(() => {
		axios
			.get("https://thebroadcaststore.co/admins/api/all-top-products")
			.then((response) => {
				setTopBrands(response.data);
			})
			.catch((error) => {
				console.error("Error fetching top brands:", error);
			});
	}, []);

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

	const hideCamera = () => {
		setCategorySelected(true);
	};

	const handleTabSelect = () => {
		window.history.pushState(null, null, `/product`);
	};

	const handleTabClick = (category) => {
		axios
			.get(
				`https://thebroadcaststore.co/admins/api/products/category/${category.id}`,
			)
			.then((response) => {
				setProducts(response.data);
				setSelectedProduct(null);
				setSelectedCategory(category);
				setCategoryName(category.title); // Set category name dynamically
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

	const showAllProducts = () => {
		setSelectedTab("allProducts");
		setSelectedCategory(null);
		setCategoryName("All Products");
		axios
			.get("https://thebroadcaststore.co/admins/api/all-feature-products")
			.then((response) => {
				setProducts(response.data);
				setSelectedProduct(null);
			})
			.catch((error) => {
				console.error("Error fetching featured products:", error);
			});
		handleTabSelect();
	};

	const showTopBrands = () => {
		setSelectedTab("topBrands");
		setSelectedCategory(null);
		setCategoryName("Top Brands");
		axios
			.get("https://thebroadcaststore.co/admins/api/all-top-products")
			.then((response) => {
				setProducts(response.data);
				setSelectedProduct(null);
			})
			.catch((error) => {
				console.error("Error fetching top brands:", error);
			});
		handleTabSelect();
	};

	const showTopModals = () => {
		setSelectedTab("topModals");
		setSelectedCategory(null);
		setCategoryName("Top Models");
		axios
			.get("https://thebroadcaststore.co/admins/api/all-feature-products")
			.then((response) => {
				setProducts(response.data);
				setSelectedProduct(null);
			})
			.catch((error) => {
				console.error("Error fetching featured products:", error);
			});
		handleTabSelect();
	};
	return (
		<>
			{!productSelected && (
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
			)}
			{!productSelected && (
				<>
					<div className="product-tabs">
						<div
							className="box-1"
							onClick={showAllProducts}>
							<h3
								className={`box-1-title ${
									selectedTab === "allProducts" && "active"
								}`}>
								All Products
							</h3>
						</div>
						<div
							className="box-1"
							onClick={showTopBrands}>
							<h3
								className={`box-1-title ${
									selectedTab === "topBrands" && "active"
								}`}>
								Top Brands
							</h3>
						</div>
						<div
							className="box-1"
							onClick={showTopModals}>
							<h3
								className={`box-1-title ${
									selectedTab === "topModals" && "active"
								}`}>
								Top Models
							</h3>
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
											className={`tab ${
												selectedCategory && selectedCategory.id === category.id
													? "active"
													: ""
											}`}
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
				</>
			)}
			{productSelected ? (
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

										<p class="price">Call for Price </p>
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
											}}></p>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
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
										<h2 className="heading">{categoryName}</h2>
									</div>
								</Col>
								<Col
									xs={6}
									className="button-container">
									<div className="button">
										<Button className="lrn-more">
											<Link to={"#"}>
												Best Seller <FaArrowRightLong />
											</Link>
										</Button>
									</div>
								</Col>
							</Row>
						</div>
						{selectedTab === "allProducts" && !selectedCategory && (
							<>
								<div className="products-container">
									{featuredProducts.slice(0, 8).map((product) => (
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
															<Link
																to={`/product-detail/${product.slug}`}
																// onClick={(event) =>
																//   handleProductSelect(product, event)
																// }
															>
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
						)}
						{selectedTab === "topBrands" && !selectedCategory && (
							<>
								<div className="products-container">
									{topBrands.slice(0, 8).map((product) => (
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
															alt={product.title}
														/>
													</div>
													<p className="short-des">{product.short_desc}</p>
													<div className="price-btn">
														<p class="price">Call for Price </p>
														<Button className="lrn-more cart">
															<Link
																to={`/product-detail/${product.slug}`}
																// onClick={(event) =>
																//   handleProductSelect(product, event)
																// }
															>
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
						)}
						{selectedTab === "topModals" && !selectedCategory && (
							<>
								<div className="products-container">
									{featuredProducts.slice(0, 8).map((product) => (
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
															<Link
																to={`/product-detail/${product.slug}`}
																// onClick={(event) =>
																//   handleProductSelect(product, event)
																// }
															>
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
						)}
						{selectedCategory && (
							<>
								{!selectedProduct ? (
									<div className="products-container">
										{products.map((product) => (
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
															<Button
																className="lrn-more cart"
																onClick={() => hideCamera()}>
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
								) : (
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
															<h3 className="sec-head">
																{selectedProduct.title}
															</h3>
															<p className="body">
																{selectedProduct.short_desc}
															</p>
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
							</>
						)}
					</Container>
				</Grid>
			)}
		</>
	);
}
