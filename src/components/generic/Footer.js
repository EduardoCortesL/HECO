import React from "react";

const Footer = () => {
	return (
		<div className="flex justify-between p-4 max-w-2xl m-auto border-t-2">
			<h3 className="text-md text-gray-600">
				Copyright 2023 HECO.
			</h3>
			<div className="flex">
				<p className="text-md text-gray-600">Terminos</p>
				<p className="text-md text-gray-600 ml-4">Privacidad</p>
			</div>
		</div>
	);
}

export default Footer;
