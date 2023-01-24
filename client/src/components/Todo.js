import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import List from "./common/List";
import { useState, useEffect } from "react";
import { listTasks, insertTask, updateTask, removeTask } from "../api/todo";

const Todo = () => {
	const [tasks, setTasks] = useState([]);

	const collectAllTask = () => {
		listTasks()
			.then((response) => setTasks(response.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		collectAllTask();
	}, []);

	const handleAddTask = (text) => {
		insertTask(text)
			.then(() => collectAllTask())
			.catch((error) => console.log(error));
	};

	const handleUpdateTask = (id, isCompleted) => {
		updateTask(id, isCompleted)
			.then(() => {
				collectAllTask();
			})
			.catch((error) => console.log(error.message));
	};

	const handleRemoveTask = (id) => {
		removeTask(id)
			.then(() => {
				collectAllTask();
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Header />
			<AddTodo addTask={handleAddTask} />
			<List
				tasks={tasks}
				handleUpdateTask={handleUpdateTask}
				handleRemoveTask={handleRemoveTask}
			/>
			<Footer />
		</>
	);
};

export default Todo;
