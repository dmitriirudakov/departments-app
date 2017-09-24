import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Employee from './Employee';

class EmployeeList extends Component {
    render() {    
        const { employees } = this.props;

        const employeeItems = employees.map((employee) => {
            return <li role="button" className="list-group-item" key={employee.id}>
                        <Employee employee={employee} key={employee.id} />
                    </li>
        });
        return (
            <ul className="list-group">
                { employeeItems }
            </ul>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        departmentId: PropTypes.string.isRequired
    })).isRequired
};


export default EmployeeList;
