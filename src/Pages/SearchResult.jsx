import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { IoStarSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export default function SearchResult() {
	const query = useQuery();
	const [loading, setLoading] = useState(false);
	const searchQuery = query.get("q");
	const [searchResults, setSearchResults] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [title, setTitle] = useState("SearchResult - The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);

	// Update document title and meta description
	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	// Scroll to top on component mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Fetch search results from API
	useEffect(() => {
		if (searchQuery) {
			setLoading(true);
			axios
				.get(
					`https://thebroadcaststore.co/admins/api/products/search?q=${searchQuery}`,
				)
				.then((response) => {
					setSearchResults(response.data);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error searching products:", error);
					setLoading(false);
				});
		}
	}, [searchQuery]);

	// Filter products that start with the first letter of the search query
	const filteredResults = searchResults.filter((product) =>
		product.title.toLowerCase().startsWith(searchQuery[0].toLowerCase()),
	);

	return (
		<>
			<div className="search-container-contact-bannerText innerban">
				<h1
					className="contact-heading"
					data-aos="fade-up">
					{loading ? (
						"Loading..."
					) : (
						<>
							{filteredResults.length > 0
								? "Search Results"
								: "No Products Found"}
						</>
					)}
				</h1>
			</div>
			{filteredResults.length > 0 && (
				<div className="search-container">
					{!selectedProduct ? (
						<div className="products-container search-container-product">
							{filteredResults.map((product) => (
								<div
									className="ftrd-slide"
									key={product.id}>
									<div className="ftrd-pro">
										<div className="product">
											<h4 className="title">{product.title}</h4>
											<div className="pro-image">
												<img
													src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
													alt={product.title}
												/>
											</div>
											<p className="short-des">{product.short_desc}</p>
											<div className="price-btn">
												<p className="price">Call for Price</p>
												<Link
													className="search-card-btn"
													to={`/product-detail/${product.slug}`}>
													Learn More
												</Link>
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
					)}
				</div>
			)}
		</>
	);
}
