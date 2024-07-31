import delivery from "../../assets/images/delivery.png";
import payment from "../../assets/images/payment.png";
import support from "../../assets/images/support.png";
import trust from "../../assets/images/trust.png";
import paymentmethod from "../../assets/images/paymentmethod.png";
import React from "react";
import { Link } from "react-router-dom";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function FooterComponent() {
	return (
		<>
			<div id="footer">
				<div
					id="footer-top"
					className="features">
					<div className="feature-flexbox">
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={delivery}
									alt=""
								/>
								<h4>Fast Delivery</h4>
								<p>Delivery order within 24 hours</p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={payment}
									alt=""
								/>
								<h4>Secure Payment</h4>
								<p>Payment protected by SSL </p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={support}
									alt=""
								/>
								<h4>24*7 Support</h4>
								<p>Customer service active 24*7 all-over</p>
							</div>
						</div>
						<div className="feature-col">
							<div className="feat-inner">
								<img
									src={trust}
									alt=""
								/>
								<h4>Trustworthy Service</h4>
								<p>Trustworthy & reliable service provider</p>
							</div>
						</div>
					</div>

					<div className="footer-links-container">
						<div>
							<div
								id="ft-clm"
								className="footer-links">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link
											href="mailto:suzy@thebroadcaststore.co"
											className="footer-icon-container">
											<MdOutlineMail
												size={25}
												className="footer-icon"
											/>
											Email: suzy@thebroadcaststore.co
										</Link>
									</li>
									<li>
										<Link
											to="tel:7476095599"
											className="footer-icon-container">
											<CiPhone
												size={25}
												className="footer-icon"
											/>
											Phone: 747-609-5599
										</Link>
									</li>
									<li>
										<Link
											to="https://www.google.com/maps/search/?api=1&query=15500+W+Telegraph+Rd,+Unit+C26,+Santa+Paula,+CA+93060"
											className="footer-icon-container">
											<CiLocationOn
												size={25}
												className="footer-icon"
											/>
											Location: 15500 W Telegraph Rd, Unit <br /> C26 Santa
											Paula, CA 93060
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div
								id="ft-clm"
								className="ft-clm-2">
								<h3>Site Links</h3>
								<ul>
									<li>
										<Link to={"/"}>Home</Link>
									</li>
									<li>
										<Link to={"/about"}>About</Link>
									</li>
									<li>
										<Link to={"/repairservice"}>Repair & Service</Link>
									</li>
									<li>
										<Link to={"/contact"}>Contact Us</Link>
									</li>
									<li>
										<Link to={"/policies"}>Privacy Policy</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div id="ft-clm">
								<h3>Services</h3>
								<ul>
									<li>
										<Link to={"/product"}>Top Products</Link>
									</li>
									<li>
										<Link to={"/request-a-call"}>Request A Call</Link>
									</li>
									<li>
										<Link to={"/financing"}>Financing</Link>
									</li>
									<li>
										<Link to={"/shipping"}>Shipping Information</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							item
							xs={3}>
							<div id="ft-clm">
								<h3>Our Newsletter</h3>
								<p>
									There are many variations of <br />
									passages of form humour, or randomised.
								</p>
								<div className="news-send-btn">
									<input
										placeholder="Enter Email"
										type="text"
										className="footer-newsletter"
									/>
									<Link
										className="pro-cont-btn"
										to="">
										Send
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="copyright">
						<div className="copyright-flexbox">
							<div>
								<p>
									<b>© 2024, Broadcast Store</b>
								</p>
							</div>
							<div>
								<img
									src={paymentmethod}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
