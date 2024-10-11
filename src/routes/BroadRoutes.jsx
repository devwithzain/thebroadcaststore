import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import About from "../Pages/About";
import SearchResult from "../Pages/SearchResult";
import Contact from "../Pages/Contact";
import Locations from "../Pages/Locations";
import Policies from "../Pages/Policies";
import LargeScaleMediaMigration from "../Pages/LargeScaleMediaMigration";
import RepairService from "../Pages/RepairService";
import Thankyou from "../Pages/Thankyou";
import Requestacall from "../Pages/Requestacall";
import Financing from "../Pages/Financing";
import Shipping from "../Pages/Shipping";
import ProductDetail from "../Pages/ProductDetail";
import CategoryDetail from "../Pages/CategoryDetail";
import AllProduct from "../Pages/AllProduct";

const BroadRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/search"
				element={<SearchResult />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
			<Route
				path="/product-detail/:slug"
				element={<ProductDetail />}
			/>
			<Route
				path="/all-product"
				element={<AllProduct />}
			/>
			<Route
				path="/product/:slug"
				element={<CategoryDetail />}
			/>
			<Route
				path="/locations"
				element={<Locations />}
			/>
			<Route
				path="/policies"
				element={<Policies />}
			/>
			<Route
				path="/repairservice"
				element={<RepairService />}
			/>
			<Route
				path="/large-scale-media-migration"
				element={<LargeScaleMediaMigration />}
			/>
			<Route
				path="/request-a-call"
				element={<Requestacall />}
			/>
			<Route
				path="/Financing"
				element={<Financing />}
			/>
			<Route
				path="/Shipping"
				element={<Shipping />}
			/>
			<Route
				path="/Product"
				element={<Product />}
			/>
			<Route
				path="/thankyou"
				element={<Thankyou />}
			/>
			<Route
				path="/Product"
				element={<Product />}
			/>
		</Routes>
	);
};

export default BroadRoutes;
