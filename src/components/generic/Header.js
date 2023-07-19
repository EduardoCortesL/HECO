import Image from "next/image";
import React from "react";

const Header = () => {
	return (
		<div className="bg-transparent">
			  <div className="relative w-full h-screen md:w-[200px] md:h-[200px] ">
							<Image src="/HECO_logo_no_bg.png" layout="fill" objectFit="contain" alt="logo HECO"/>		
					</div>
				</div>
			);
		}
		
		export default Header;;


/*const Header = () => {
	return (
		<div className="bg-transparent">
			  <div className="relative w-full h-screen md:w-[200px] md:h-[200px] ">
							<Image src="/HECO_logo_no_bg.png" layout="fill" objectFit="contain" alt="logo HECO"/>		
					</div>
				</div>
			);
		}
		
		export default Header; */