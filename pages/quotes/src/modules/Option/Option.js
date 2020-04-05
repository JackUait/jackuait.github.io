import React from "react";

const Option = (props) => {
	return (
		<label>
			<input
				type="radio"
				checked={props.checked}
				value={props.value}
				onChange={props.onChange}
			/>
			{props.text}
		</label>
	);
};

export default Option;
