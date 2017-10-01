import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import { 
	FORM_NAMES,
	DEFAULT_ROUTE,
	EMPLOYEE_CREATE_SUCCEEDED_MSG,
	EMPLOYEE_CREATE_FAILED_MSG,
	EMPLOYEE_DELETE_FAILED_MSG, 
	EMPLOYEE_DELETE_SUCCEEDED_MSG,
	EMPLOYEE_UPDATE_SUCCEEDED_MSG,
	EMPLOYEE_UPDATE_FAILED_MSG
} from '../../../constants';
import { CreateEmployeeForm, EditEmployeeForm } from '../components';
import { createEmployee, updateEmployee, deleteEmployee } from '../../../state';
import { notification } from '../../../services';

class EmployeePage extends Component {

	onCreateEmployee(data) {
		this.props.storeActions.createEmployee(data).then(() => {
			this.props.resetCreateEmployeeForm();
			notification.showSuccess(EMPLOYEE_CREATE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(EMPLOYEE_CREATE_FAILED_MSG);
		});
	}

	onUpdateEmployee(data) {
		this.props.storeActions.updateEmployee(data).then(() => {
			notification.showSuccess(EMPLOYEE_UPDATE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(EMPLOYEE_UPDATE_FAILED_MSG);
		});
	}

	onDeleteEmployee(data) {
		this.props.storeActions.deleteEmployee(data).then(() => {
			this.props.goToDefault();
			notification.showSuccess(EMPLOYEE_DELETE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(EMPLOYEE_DELETE_FAILED_MSG);
		});
	}

	render() {
		const { employee, employeeId, departments } = this.props;
		
		const createFormProps = {
			departments,
			onSubmit: this.onCreateEmployee.bind(this) 
		};
		const editFormProps = {
			initialValues: employee,
			departments,
			onSubmit: this.onUpdateEmployee.bind(this),
			onDelete: this.onDeleteEmployee.bind(this)
		};

		const isEdit = !!employee;
		const isCreate = !employeeId;
		const isNotFound = !!employeeId && !employee;

		if (isNotFound) {
			return <h2> Ooops! Employee not found!</h2>;
		} else if (!isEdit && !isCreate) {
			return <h2> Ooops! Something goes wrong!</h2>;
		}

		return (
			<div>
				{ !employeeId && !!departments && <CreateEmployeeForm {...createFormProps} /> }
				{ !!employee && !!departments && <EditEmployeeForm {...editFormProps} /> }
			</div>
		)
	}
}


const mapStateToProps = ({ departments, employees }, { params } ) => ({
	departments,
	employeeId: params && params.id,
	employee: params && params.id
		&& employees.find(employee => employee.id.toString() === params.id.toString())
})

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
			createEmployee,
			deleteEmployee,
			updateEmployee
		}, dispatch),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`)),
		resetCreateEmployeeForm: () => dispatch(reset(FORM_NAMES.CREATE_EMPLOYEE))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
