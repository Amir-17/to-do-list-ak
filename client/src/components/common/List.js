import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks, handleRemoveTask, handleUpdateTask }) => {
	return (
		<div
			className="List"
			style={{
				display: "flex",
				alignItems: "flex-start",
				justifyContent: "center",
				width: "70%",
				height: "82%",
				margin: "0 auto",
				overflowY: "scroll",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					alignItems: "center",
				}}>
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
