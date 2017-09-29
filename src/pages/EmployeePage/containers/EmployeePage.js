import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { EmployeeCreateForm, EmployeeEditForm } from '../components';
import { createEmployee, updateEmployee, deleteEmployee } from '../../../state/employee';

class EmployeePage extends Component {

	render() {
		const { employee, employeeId, departments } = this.props;
		const { onCreate, onUpdate, onDelete } = this.props.storeActions;
		const createFormProps = { onCreate, departments };
		const editFormProps = { employee, onUpdate, onDelete, departments };

		return (
				<div>
					{ !employeeId && !!departments && <EmployeeCreateForm {...createFormProps} /> }
					{ !!employee && !!departments && <EmployeeEditForm {...editFormProps} /> }
				</div>
		)
	}
}

const mapStateToProps = ({ departments, employees }, { params } ) => ({
	departments,
	employees,
	employeeId: params && params.id,
	employee: params && params.id
		&& employees.find(employee => employee.id.toString() === params.id.toString())
})

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
			onCreate: createEmployee,
			onDelete: deleteEmployee,
			onUpdate: updateEmployee
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
