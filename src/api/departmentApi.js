import axios from 'axios';

function fetchDepartments() {
    return axios.get('http://localhost:8080/departments')
        .then(res => res.data)
}

export default { fetchDepartments };