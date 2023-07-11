import React, { useState } from "react";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const QUESTIONS = [
	{
		question: "¿Cuáles son los beneficios de instalar un cargador en mi hogar?",
		answer: "Instalar un cargador en tu hogar te brinda la comodidad de cargar tu vehículo eléctrico de forma rápida y conveniente. Además, te permite ahorrar en costos de combustible al aprovechar tarifas de electricidad más económicas y contribuir al medio ambiente al utilizar energía limpia."
	},
	{
		question: "¿Por qué debería elegir HECO para la instalación de mi cargador Tesla? ",
		answer: "En HECO, contamos con un equipo especializado compuesto por un arquitecto y un ingeniero mecánico, lo que nos permite ofrecer soluciones integrales y personalizadas. Nuestra amplia experiencia en el sector y nuestro enfoque meticuloso nos aseguran que el proceso de instalación sea eficiente, seguro y sin preocupaciones para nuestros clientes."
	},
	{
		question: "¿Cuánto tiempo lleva la instalación de un cargador Tesla en mi hogar?",
		answer: " El tiempo de instalación puede variar según diversos factores, como la infraestructura eléctrica existente en tu hogar. Sin embargo, en HECO nos esforzamos por realizar la instalación de forma ágil. En general, podemos completar la instalación en un tiempo razonable y nos aseguramos de minimizar las interrupciones en tu rutina diaria."
	},
	{
		question: "¿Puedo aprovechar las tarifas de electricidad más económicas al cargar mi vehículo durante la noche?",
		answer: "¡Absolutamente! Una de las ventajas de tener un cargador en casa es que puedes cargar tu vehículo durante las horas de tarifas eléctricas más bajas, como la noche. Esto te permite aprovechar ahorros adicionales en comparación con los costos de cargar en estaciones públicas o durante las horas pico."
	},
];

const Question = ({ question }) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleOpen = () => {
		setIsOpen(!isOpen);
	}
	
	return (
		<div className="px-2 py-4 border-b-2">
			<div 
				onClick={handleOpen}
				className="flex items-top"
			>
				<FontAwesomeIcon 
					icon={isOpen ? faMinus : faPlus} 
					className="text-sky-400 text-xl mt-2"
				/>
				<h2 className="text-midnight-blue text-2xl font-bold ml-2">
					{question.question}
				</h2>
			</div>
			{isOpen && (
				<p className="text-gray-600 text-lg mt-2">
					{question.answer}
				</p>
			)}
		</div>
	);
}

const FAQ = () => {
	return (
		<div className="m-auto max-w-2xl">
			<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold text-center mb-8">
				Preguntas frecuentes
			</h2>
			{QUESTIONS.map((q, index) => {
				return (
					<Question 
						question={q}
						key={`Question-${q}`}
					/>
				);
			})}
		</div>
	);
}

export default FAQ;
