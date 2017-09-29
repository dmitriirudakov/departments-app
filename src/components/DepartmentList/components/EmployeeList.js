import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Employee from './Employee';
import { employeeArrayRequiredProp } from '../../../constants';

class EmployeeList extends Component {

	static propTypes = {
		employees: employeeArrayRequiredProp,
		onEmployeeClick: PropTypes.func.isRequired
	}
	
	render() {
		const { employees, onEmployeeClick } = this.props;

		const employeeItems = employees.map((employee) => {
			return <li role="button" className="list-group-item" key={employee.id}>
						<Employee onEmployeeClick={onEmployeeClick} employee={employee} key={employee.id} />
					</li>
		});
		return (
			<ul className="list-group">
				{ employeeItems }
			</ul>
		);
	}
}

export default EmployeeList;
