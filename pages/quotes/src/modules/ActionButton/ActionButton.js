import React from "react";
import "./ActionButton.css";

const ActionButton = (props) => {
	return (
		<button className="ActionButton" onClick={props.onClick}>
			{props.text}
		</button>
	);
};

export default ActionButton;
