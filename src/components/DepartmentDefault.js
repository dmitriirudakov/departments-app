import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployeeList from './EmployeeList';

class DepartmentDefault extends Component {
    render() {    
        const { employees } = this.props;

        if (!employees || !employees.length) {
            return false;
        }

        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        -- No Department --
                    </div>
                    <EmployeeList employees={employees} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ employees, departments }) => {
    const departmentIds = departments.map(department => department.id);
    return {
        employees: employees.filter(employee => !departmentIds.includes(employee.departmentId))
    };
}

export default connect(mapStateToProps)(DepartmentDefault);
