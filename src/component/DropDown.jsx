import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const DropDown = () => {
	const [open, setOpen] = useState(false);

	const handleSelect = (brand) => {
		setOpen(false);
	};

	return (
		<div className="dropdown-container">
			<motion.div
				animate={open ? "open" : "closed"}
				className="relative">
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="dropdown-button">
					<span className="dropdown-button-text">Categories</span>
					<motion.span variants={iconVariants}>
						<FiChevronDown size={30} />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="dropdown-list">
					{[
						"sony",
						"canon",
						"panasonic",
						"blackmagic design",
						"ikegami",
						"leitch",
						"grass valley",
						"tektronix",
					].map((item, index) => (
						<Option
							key={index}
							onSelect={handleSelect}
							text={item}
						/>
					))}
				</motion.ul>
			</motion.div>
		</div>
	);
};

const Option = ({ text, onSelect }) => {
	return (
		<motion.a
			href={`/brand/${text}`} // This can be ignored, as we're using navigate
			variants={itemVariants}
			onClick={() => onSelect(text)}
			className="dropdown-option">
			<span>{text}</span>
		</motion.a>
	);
};

export default DropDown;

// Framer Motion Variants (unchanged)
const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
		},
	},
};

const iconVariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
};

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			when: "afterChildren",
		},
	},
};
