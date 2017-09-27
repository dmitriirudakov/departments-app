import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmployeeList } from './';
import { employeeArrayRequiredProp, departmentRequiredProp } from '../../constants';

class Department extends Component {

	static propTypes = {
		department: departmentRequiredProp,
		employees: employeeArrayRequiredProp,
		onDepartmentClick: PropTypes.func.isRequired,
		onEmployeeClick: PropTypes.func.isRequired
	};
	
	render() {
		const { employees, department, onDepartmentClick, onEmployeeClick } = this.props;
		const employeeListProps = { employees, onEmployeeClick };

		return (
			<div>
				<div className="panel panel-primary">
					<div role="button" className="panel-heading" 
						onClick={() => onDepartmentClick(department.id)}>
						{ department.name }
					</div>
					<EmployeeList {...employeeListProps} />
				</div>
			</div>
		);
	}
}

export default Department;
