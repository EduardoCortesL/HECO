import React, { useState } from "react";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const QUESTIONS = [
	{
		question: "Por que instalar un cargador en mi casa",
		answer: "No sea culo."
	},
	{
		question: "En realidad ahorrare dinero al final del dia ",
		answer: "Mas para las cheves."
	},
	{
		question: "Se puede isntalar en mi casa",
		answer: "Si no es como mi casa entonces si."
	},
	{
		question: "Por que hacerlo con heco",
		answer: "Somos dos jovenes arquitectos e ingenieros con experiencia internacional y reconocidos mundialmente por las mejores ocmpetencias de arquitectura. Nuestra mision es darte el mejor servicio para tu inversion y que puedas ser tu propio jefe"
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
					className="text-primary text-xl mt-2"
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
				Preguntas frecuentes,
				<span className="text-transparent text-primary underline-offset-2">
					{` answered`}
				</span>
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
