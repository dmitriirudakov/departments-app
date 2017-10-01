import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { loading } from '../../services';
import { Department, DepartmentDefault } from './components';
import { AppLoader } from '../../components';
import { DEPARTMENT_ROUTE, EMPLOYEE_ROUTE } from '../../constants';

class DepartmentList extends Component {

	render() {
		const { departments, employees, onDepartmentClick, onEmployeeClick, loading } = this.props;
		const listLabel = <h4>Department List:</h4>;

		if ((!Array.isArray(departments) || !departments.length) && 
			(!Array.isArray(employees) || !employees.length)) {
				return <div>
							{ listLabel }
							{!loading && <p>There are no items created yet</p> }
							{ loading && <AppLoader></AppLoader>}
						</div>
		}

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
				{ listLabel }
				{ departmentItems }
				<DepartmentDefault {...departmentDefaultProps}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	departments: state.departments,
	employees: state.employees,
	loading: loading.isAnyFetchLoading(state),
});

const mapDispatchToProps = dispatch => {
	return {
		onDepartmentClick: id => {
			dispatch(push(`${DEPARTMENT_ROUTE}/${id}`))
		},
		onEmployeeClick: id => {
			dispatch(push(`${EMPLOYEE_ROUTE}/${id}`))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
