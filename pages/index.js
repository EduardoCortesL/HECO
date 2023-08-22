import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Header from "../src/components/generic/Header";
import Separator from "../src/components/generic/Separator";
import Waitlist from "../src/components/landing/Waitlist";
import FeatureGrid from "../src/components/landing/FeatureGrid";
import FeatureSection from "../src/components/landing/FeatureSection";
import HowItWorks from "../src/components/landing/HowItWorks";
import Pricing from "../src/components/landing/Pricing";
import FAQ from "../src/components/landing/FAQ";
import CTA from "../src/components/landing/CTA";
import Footer from "../src/components/generic/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Meta from "../src/components/generic/meta_SEO";
import Subscribe from "../src/components/landing/newWaitlist";

export default function Home() {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 750,
		});
	}, []);

	return (
		<div>
			<Meta/>
			<main className="bg-heco_trans">
				<Header />
				<div
					data-aos="fade-up"
					className="px-4 bg-gradient-to-b from-heco_trans to-heco_blue"
				>
					<div className="text-center max-w-2xl m-auto ">
						<h1 className="text-6xl md:text-7xl font-bold text-midnight-blue mb-16">
							Cargadores Tesla para tu
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-heco_yellow">
								{` hogar`}
							</span>
						</h1>
						<p className="text-2xl font-medium text-gray-600 my-8">
							El futuro del automovilismo en tu casa
						</p>
						<Subscribe />
					</div>
					<div className="max-w-6xl h-96 m-auto mt-20 rounded-t-lg"></div>
					<div className="m-auto max-w-2xl py-16 cursor-default" data-aos="fade-up">
						<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold mt-4 text-center">
							Datos no opiniones
						</h2>
						<p className="text-center text-2xl font-medium my-8 text-midnight-blue">
							Instalar un cargador de TESLA 3 tiene muchos beneficios
						</p>
						<div className="md:flex justify-between m-auto">
							<div className="text-center py-2 mb-8 md:mb-0">
								<h2 className="text-5xl md:text-6xl font-bold mb-2">16x</h2>
								<p className="text-2xl font-medium">Mas rapido que un cargador tradicional</p>
							</div>
							<div className="text-center py-2 mb-8 md:mb-0">
								<h2 className="text-5xl md:text-6xl font-bold mb-2">80km</h2>
								<p className="text-2xl font-medium">Hasta 80 km de rango por hr de carga</p>
							</div>

						</div>
					</div>
				</div>
				<div className="bg-white py-8 md:py-16 cursor-default" data-aos="fade-up">
					<div className="m-auto max-w-2xl py-16">
						<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold mt-4 text-center">
							Quienes somos
						</h2>
						<p className="text-center text-2xl font-medium mt-8 text-gray-600">
						</p>
					</div>
				</div>
				<div className="px-4 overflow-hidden cursor-default">
					<FeatureSection
						subtitle="HECO es una empresa fundada por dos hermanos con una pasión compartida por la innovación y la excelencia. 

						Nuestro equipo está compuesto por un arquitecto y un ingeniero mecánico, lo que nos permite combinar habilidades técnicas y conocimientos en diseño para ofrecer soluciones integrales y personalizadas a nuestro clientes."
						side="left"
					/>
				</div>
				<div className="py-8 md:py-16 mt-8 md:mt-16 cursor-default" data-aos="fade-up">
					<HowItWorks
						title="Tu cargador de la forma mas sencilla"
						subtitle="En HECO, nos encargamos de cada etapa del proceso de instalación con meticulosidad y profesionalismo para brindarle un servicio de alta calidad."
					/>
				</div>
				<div className="py-8 md:py-16 px-4" data-aos="fade-up">
					<FAQ />
				</div>
				<div className="py-8 md:py-16 px-4 cursor-default" data-aos="fade-up" onClick={() => scroll.scrollToTop()}>
					<CTA
						title="¡Contáctanos hoy mismo y descubre cómo HECO puede transformar tu experiencia de carga eléctrica en casa!"
						subtitle="Haz click aqui para contactarte con nosotros"
						onCTAClick={scroll.scrollToTop}
					/>
				</div>
				<Footer />
			</main>
		</div>
	);
}

