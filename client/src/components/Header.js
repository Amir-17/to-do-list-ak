import React from "react";
import TodoLogo from "../assets/images/ToDoLogo.png";
import "../assets/styles/Header.css";

const Header = () => {
	return (
		<div className="header">
			<img className="header_img" src={TodoLogo} alt="logo of to do list" />
			<p className="header_paragraph">TO DO LIST</p>
		</div>
	);
};

export default Header;
