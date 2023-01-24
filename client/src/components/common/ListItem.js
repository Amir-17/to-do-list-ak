import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ deleteTask, updateTask, task }) => {
	const [isCrossed, setIsCrossed] = useState(false);

	const crossTask = () => {
		setIsCrossed(!isCrossed);
		updateTask(task._id, !isCrossed);
	};

	return (
		<div
			className="listItem"
			style={{
				margin: "0% ",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "95%",
				padding: "1%",
			}}>
			<p
				onClick={crossTask}
				style={{
					textDecoration: isCrossed ? "line-through" : "none",
					width: "85%",
					height: "10%",
					cursor: "pointer",
					fontSize: "16px",
					border: "1px solid gray",
					borderRight: "0",
					borderRadius: "2px",
					padding: "2px 4px",
					margin: "0",
				}}>
				{task.text}
			</p>
			<button
				onClick={() => deleteTask(task._id)}
				style={{
					width: "15%",
					fontSize: "18px",
					display: "inline-block",
					justifyContent: "center",
					alignItems: "center",
					background: "white",
					color: "red",
					border: "1px solid gray",
					borderRadius: "2px",
					borderLeft: "0",
					padding: "2px 4px",
					cursor: "pointer",
					margin: "0",
				}}>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</div>
	);
};

export default ListItem;
