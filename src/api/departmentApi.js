import axios from 'axios';

const departmentsUrl = 'http://localhost:8080/departments/';

function fetchDepartments() {
    return axios.get(departmentsUrl)
        .then(res => res.data)
}

function updateDepartment(id, data) {
    return axios.put(`${departmentsUrl}${id}`, data)
        .then(res => res.data)
}

function deleteDepartment(id) {
    return axios.delete(`${departmentsUrl}${id}`)
        .then(res => res.data)
}

function createDepartment(data) {
    return axios.post(departmentsUrl, data)
        .then(res => res.data)
}

export default { fetchDepartments, updateDepartment, deleteDepartment, createDepartment };