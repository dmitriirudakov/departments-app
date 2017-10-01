import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { employeeRequiredProp } from '../../../constants';

class Employee extends Component {

	static propTypes = {
		employee: employeeRequiredProp,
		onEmployeeClick: PropTypes.func.isRequired
	};

	render() {
		const { employee, onEmployeeClick } = this.props;
		return (
			<div onClick={() => onEmployeeClick(employee.id)}>
				<span>{employee.firstName} {employee.lastName}</span>
			</div>
		);
	}
}

export default Employee;
