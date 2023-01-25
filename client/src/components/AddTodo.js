import React from "react";
import { useState } from "react";
import "../assets/styles/AddTodo.css";

const AddTodo = ({ addTask }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		addTask(inputValue);
		setInputValue("");
	};
	return (
		<div className="addTodo_input">
			<form className="addTodo_form" onSubmit={handleSubmit}>
				<input
					className="addTodo_input_field"
					type="text"
					value={inputValue}
					required
					onChange={(event) => setInputValue(event.target.value)}
					placeholder="Enter a title for this task"></input>
				<button className="addTodo_button" label="+">
					+
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
