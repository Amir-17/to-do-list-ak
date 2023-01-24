import React from "react";
import { useState } from "react";

const AddTodo = ({ addTask }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addTask(inputValue);
		setInputValue("");
	};
	return (
		<div
			className="input_form"
			style={{
				margin: "1% auto",
				display: "flex",
				alignItems: "end",
				justifyContent: "center",
				width: "95%",
				height: "5%",
				boxShadow: "1px 1px 0px 1px red",
				padding: "1%",
			}}>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "70%",
					margin: "0 auto",
				}}>
				<input
					type="text"
					value={inputValue}
					required
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Enter a title for this task"
					style={{
						width: "80%",
						fontSize: "20px",
						border: "1px solid gray",
						borderRight: "0",
						borderRadius: "2px",
						padding: "2px 4px",
					}}></input>
				<button
					style={{
						width: "15%",
						fontSize: "20px",
						cursor: "pointer",
						color: "darkgreen",
						fontWeight: "bolder",
						background: "white",
						border: "1px solid gray",
						borderRadius: "2px",
						borderLeft: "0",
						padding: "2px 4px",
					}}
					label="+">
					+
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
