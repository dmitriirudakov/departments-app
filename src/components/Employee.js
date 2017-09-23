import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Employee extends Component {
    render() {    
        const { employee, onEmployeeClick } = this.props;
        return (
            <div onClick={() => onEmployeeClick(employee.id)}>
                <span>{employee.firstName} {employee.lastName}</span>
            </div>
        );
    }
}

Employee.propTypes = {
    employee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        departmentId: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = ({ departments }, { employee } ) => ({
    department: departments.find(department => department.id === employee.departmentId)
});

const mapDispatchToProps = dispatch => {
    return {
        onEmployeeClick: id => {
            dispatch(push(`/employee/${id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
