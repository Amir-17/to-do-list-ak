import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/ListItem.css";

const ListItem = ({ deleteTask, updateTask, task }) => {
	const [isCrossed, setIsCrossed] = useState(false);

	const crossTask = () => {
		setIsCrossed(!isCrossed);
		updateTask(task._id, !isCrossed);
	};

	return (
		<div className="listItem">
			<p
				className="listItem_p"
				onClick={crossTask}
				style={{
					textDecoration: isCrossed ? "line-through" : "none",
				}}>
				{task.text}
			</p>
			<button className="listItem_button" onClick={() => deleteTask(task._id)}>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</div>
	);
};

export default ListItem;
