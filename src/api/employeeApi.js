import axios from 'axios';

import { EMPLOYEE_API_URL } from '../constants/';

function fetchEmployees() {
	return axios.get(EMPLOYEE_API_URL)
		.then(res => res.data)
}

function updateEmployee(id, data) {
	return axios.put(`${EMPLOYEE_API_URL}${id}`, data)
		.then(res => res.data)
}

function deleteEmployee(id) {
	return axios.delete(`${EMPLOYEE_API_URL}${id}`)
		.then(res => res.data)
}

function createEmployee(data) {
	return axios.post(EMPLOYEE_API_URL, data)
		.then(res => res.data)
}

export default { fetchEmployees, updateEmployee, deleteEmployee, createEmployee };