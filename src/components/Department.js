import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EmployeeList from './EmployeeList';

class Department extends Component {
    render() {    
        const { employees, department, onDepartmentClick } = this.props;
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" 
                        onClick={() => onDepartmentClick(department.id)}>
                        { department.name }
                    </div>
                    <EmployeeList employees={employees} />
                </div>
            </div>
        );
    }
}

Department.propTypes = {
    department: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = ({ employees }, { department }) => ({
    employees: employees.filter(employee => employee.departmentId === department.id)
});

const mapDispatchToProps = dispatch => {
    return {
        onDepartmentClick: id => {
            dispatch(push(`/department/${id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);
