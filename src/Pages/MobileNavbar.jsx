import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../src/assets/images/thebroadcastlogo.webp";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

const navLinks = [
	{
		id: 1,
		title: "Home",
		to: "/",
	},
	{
		id: 2,
		title: "About Us",
		to: "/about",
	},
	{
		id: 3,
		title: "Product",
		to: "/product",
	},
	{
		id: 4,
		title: "Contact Us",
		to: "/contact",
	},
];

export default function MobileNav() {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [openSearch, setOpenSearch] = useState(false);

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/search?q=${searchQuery}`);
	};

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toggle]);

	return (
		<div className="mobileNavbar">
			<div className="mobileNavbar-logo">
				<div>
					<Link to={"/"}>
						<img
							src={logo}
							alt="logo"
							className="logoImg"
						/>
					</Link>
				</div>
				<div className="search-icon">
					<IoSearchOutline
						onClick={() => setOpenSearch(!openSearch)}
						className="mobileNavbar-logo-icon"
						size={30}
					/>
					<IoMenu
						onClick={() => setToggle(!toggle)}
						className="mobileNavbar-logo-icon"
						size={30}
					/>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
						className="mobileNavbar-fixed">
						<div className="mobileNavbar-logo">
							<Link to={"/"}>
								<img
									src={logo}
									alt="logo"
									className="logoImg"
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(!toggle)}
								className="mobileNavbar-logo-icon"
								size={30}
							/>
						</div>
						<ul className="mobileNavbar-fixed-links">
							{navLinks.map((item) => (
								<Link
									to={item.to}
									key={item.title}
									onClick={() => {
										setToggle(!toggle);
									}}
									className="mobileNavbar-fixed-links-title">
									{item.title}
								</Link>
							))}
							<div className="mobileNavbar-socials">
								<h3 className="mobileNavbar-socials-title">Socials</h3>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Email:</h3>
									<a
										href="mailto:suzy@thebroadcaststore.co"
										className="mobileNavbar-socials-para">
										suzy@thebroadcaststore.co
									</a>
								</div>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Contact:</h3>
									<a
										href="tel:747-609-5599"
										className="mobileNavbar-socials-para">
										747-609-5599
									</a>
								</div>
								<div className="flex flex-col gap-y-2">
									<h1 className="mobileNavbar-socials-title">FOLLOW US ON:</h1>
									<div className="mobileNavbar-socials-icon">
										<SlSocialLinkedin
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<FaInstagram
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<SlSocialFacebook
											size={25}
											className="mobileNavbar-logo-icon"
										/>
									</div>
								</div>
							</div>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
			{openSearch && (
				<div className="search-topbar search-containers">
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
				</div>
			)}
		</div>
	);
}
