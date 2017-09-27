import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Department from './Department';
import DepartmentDefault from './DepartmentDefault';

import { employeeArrayRequiredProp, departmentArrayRequiredProp } from '../../constants';

class DepartmentList extends Component {

	static propTypes = {
		departments: departmentArrayRequiredProp,
		employees: employeeArrayRequiredProp,
		onDepartmentClick: PropTypes.func.isRequired,
		onEmployeeClick: PropTypes.func.isRequired
	};

  render() {
	const { departments, employees, onDepartmentClick, onEmployeeClick } = this.props;

	const departmentItems = departments.map((department) => {
		const departmentEmployees = employees.filter(e => e.departmentId === department.id);
		const departmentProps = { department, onDepartmentClick, onEmployeeClick, employees: departmentEmployees, key: department.id }

		return <Department { ...departmentProps } />
	});

	const departmentIds = departments.map(department => department.id);
	const employeesNoDepartment = employees.filter(employee => !departmentIds.includes(employee.departmentId))
	const departmentDefaultProps = { employees: employeesNoDepartment, onEmployeeClick }

	return (
		<div>
			<h4>Department List:</h4>
			{ departmentItems }
			<DepartmentDefault {...departmentDefaultProps}/>
		</div>
	);
  }
}

export default DepartmentList;
