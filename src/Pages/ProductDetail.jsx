import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

export default function ProductDetail() {
	const [title, setTitle] = useState("Product Detail- The BroadCast Store");
	const [description, setDescription] = useState(
		"Broadcast Store is a professional audiovisual equipment company providing services like consignment, system integration, and media migration etc.",
	);
	const { slug } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		document.title = title;
		document
			.getElementById("meta-description")
			.setAttribute("content", description);
	}, [title, description]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getProduct = async () => {
			const options = { method: "GET" };
			try {
				setLoading(true);
				const response = await fetch(
					`https://thebroadcaststore.co/admins/api/product-details/${slug}`,
					options,
				);
				const productData = await response.json();
				console.log(productData);
				setProduct(productData);
			} catch (error) {
				console.error(error);
				setLoading(true);
			} finally {
				setLoading(false);
			}
		};
		getProduct();
	}, [slug]);

	return (
		<div>
			{loading ? (
				<div>loading...</div>
			) : (
				<div
					id="product"
					className="selected-product">
					<Container Container>
						<div className="pro-inner">
							<Row className="product-page-data">
								<Col
									xs="6"
									className="product-page-data-img">
									<div className="image">
										<img
											src={`https://thebroadcaststore.co/admins/public/${product.img_path}`}
											alt={product.title}
										/>
									</div>
								</Col>
								<Col
									xs="6"
									className="product-page-data-data">
									<div className="innerContent">
										<h3 className="sec-head">{product.title}</h3>
										<p className="body">{product.short_desc}</p>
										<p className="price">
											<Link
												className="pro-cont-btn"
												to="/contact">
												Contact Us
											</Link>
										</p>
										<div className="meta">
											<div className="rating">
												{Array.from({ length: product.rating }, (_, index) => (
													<IoStarSharp key={index} />
												))}
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
									<div className="innerContent">
										<h3 className="sec-head">Model Details</h3>
										<p
											className="para"
											dangerouslySetInnerHTML={{
												__html: product.long_desc,
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
}
