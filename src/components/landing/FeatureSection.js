import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const FeatureSection = ({
	title,
	subtitle,
	quote,
	name,
	side
}) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div data-aos={side === "right" ? "fade-right" : "fade-left"} className={`flex ${side === "right" ? "flex-row-reverse" : "flex-row"} max-w-6xl m-auto py-8 md:py-16`}>
			<div className={`md:flex-1 px-8 py-4 border-heco_white ${side === "right" ? "border-r-2" : "border-l-2"}`}>
				<div>
					<p className="text-3xl font-medium my-8 text-gray-600">
						{subtitle}
					</p>
				</div>
			</div>
		</div>
	);
}

export default FeatureSection;
