import axios from 'axios';

function fetchEmployees() {
    return axios.get('http://localhost:8080/employees')
        .then(res => res.data)
}

export default { fetchEmployees };