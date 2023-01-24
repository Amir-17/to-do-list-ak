import axios from "axios";
import config from "../config/config";

const apiUrl = config.apiPath;

const headers = {
	"content-type": "application/json",
};

const listTasks = async () => {
	return axios.get(`${apiUrl}/todos`, headers);
};

const insertTask = (text) => {
	return axios.post(`${apiUrl}/todos`, { text: text }, headers);
};

const updateTask = (id, isCompleted) => {
	return axios.put(
		`${apiUrl}/todos/${id}`,
		{ isCompleted: isCompleted },
		headers
	);
};

const removeTask = (id) => {
	return axios.delete(`${apiUrl}/todos/${id}`, headers);
};

export { listTasks, insertTask, updateTask, removeTask };
