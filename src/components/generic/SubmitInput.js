import React from "react";

const SubmitInput = ({ value }) =>  {
	return (
		<input 
			type="submit"
			value={value}
			className="w-full px-7 py-3 rounded-lg border-2 bg-sky-400 text-xl bg-sky-400 text-white font-medium cursor-pointer hover:opacity-50 duration-200"
		/>
	);
}

export default SubmitInput;
