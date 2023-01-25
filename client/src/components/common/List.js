import React from "react";
import ListItem from "./ListItem";
import "../../assets/styles/List.css";

const List = ({ tasks, handleRemoveTask, handleUpdateTask }) => {
	return (
		<div className="list">
			<div className="list_listItem">
				{tasks && tasks.length > 0
					? tasks.map((task) => {
							return (
								<ListItem
									task={task}
									key={`task_${task._id}`}
									deleteTask={handleRemoveTask}
									updateTask={handleUpdateTask}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default List;
