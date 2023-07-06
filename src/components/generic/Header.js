import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className="bg-transparent">
			<div className="m-auto max-w-6xl flex items-center justify-between">
					<Image src="/HECO_logo_no_bg.png" width={300} height={300} alt="logo HECO"/>		
			</div>
		</div>
	);
}

export default Header;
