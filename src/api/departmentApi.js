import axios from 'axios';

import { DEPARTMENT_API_URL } from '../constants/';

function fetchDepartments() {
    return axios.get(DEPARTMENT_API_URL)
        .then(res => res.data)
}

function updateDepartment(id, data) {
    return axios.put(`${DEPARTMENT_API_URL}${id}`, data)
        .then(res => res.data)
}

function deleteDepartment(id) {
    return axios.delete(`${DEPARTMENT_API_URL}${id}`)
        .then(res => res.data)
}

function createDepartment(data) {
    return axios.post(DEPARTMENT_API_URL, data)
        .then(res => res.data)
}

export default { fetchDepartments, updateDepartment, deleteDepartment, createDepartment };