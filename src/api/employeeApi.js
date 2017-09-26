import axios from 'axios';

const employeesUrl = 'http://localhost:8080/employees/';

function fetchEmployees() {
    return axios.get(employeesUrl)
        .then(res => res.data)
}

function updateEmployee(id, data) {
    return axios.put(`${employeesUrl}${id}`, data)
        .then(res => res.data)
}

function deleteEmployee(id) {
    return axios.delete(`${employeesUrl}${id}`)
        .then(res => res.data)
}

function createEmployee(data) {
    return axios.post(employeesUrl, data)
        .then(res => res.data)
}

export default { fetchEmployees, updateEmployee, deleteEmployee, createEmployee };