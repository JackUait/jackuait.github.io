import React from "react";
import "./InfoField.css";

const InfoField = (props) => {
	const text = `“${props.text}”`;
	let classes = "InfoField";
	if (text.length > 350) {
		classes += " InfoFieldLong";
	}
	return <div className={classes}>{props.text ? text : null}</div>;
};

export default InfoField;
