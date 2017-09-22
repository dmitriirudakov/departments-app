import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Employee extends Component {
    render() {    
        const { employee } = this.props;
        return (
            <div>
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

export default connect(mapStateToProps)(Employee);
