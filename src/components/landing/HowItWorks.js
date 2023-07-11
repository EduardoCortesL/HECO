import React from "react";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import Image from "next/image";

const STEPS = [
	{
		title: "Cotizamos",
		subtitle: "Ofrecemos el mejor precio.",
		image: "/carro.jpg"
	},
	{
		title: "Instalamos",
		subtitle: "Eficiencia garantizada.",
		image: "/cargador.jpg"
	},
	{
		title: "Confianza total",
		subtitle: "Encuentra nuevos limites.",
		image: "/manejar.jpeg"
	},
];

const Step = ({ step }) => {
	return (
		<div className="flex-1 py-4 px-4">
			<div>
				<Image src={step.image} width={350} height={260}/>
			</div>
			<div className="mt-4">
				<p className="text-2xl text-gray-600 font-bold mb-2 text-center ">
					{step.title}
				</p>
				<p className="text-lg text-midnight-blue font-medium text-center ">
					{step.subtitle}
				</p>
			</div>
		</div>
	);
}

const HowItWorks = ({ title, subtitle, image }) => {
	return (
		<div>
			<div className="m-auto max-w-2xl">
				<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold mt-4 text-center">
					{title}
				</h2>
				<p className="text-center text-2xl font-medium my-8 text-gray-600">
					{subtitle}
				</p>
				<p className="text-center text-2xl font-medium my-8 text-gray-600">
					{image}
				</p>
			</div>
			<div className="md:flex justify-around m-auto max-w-6xl py-8 md:py-16">
				{STEPS.map((s, index) => {
					return (
						<Step
							step={s}
							key={`Step-${index}`}
						/> 
					);
				})}
			</div>
		</div>
	);
};

export default HowItWorks;
