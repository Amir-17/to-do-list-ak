import React from "react";
import TodoLogo from "../assets/images/ToDoLogo.png";

const Header = () => {
	return (
		<div
			className="header"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "95%",
				height: "5%",
				margin: "0 auto",
				boxShadow: "2px 2px 2px 1px #000000",
				padding: "1%",
			}}>
			<img
				src={TodoLogo}
				alt="logo of to do list"
				style={{
					height: "80px",
				}}
			/>
			<p
				style={{
					fontSize: "28px",
					fontWeight: "bolder",
					fontFamily: "Comic Sans MS",
				}}>
				TO DO LIST
			</p>
		</div>
	);
};

export default Header;
