import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import { 
	FORM_NAMES, 
	DEFAULT_ROUTE, 
	DEPARTMENT_CREATE_SUCCEEDED_MSG,
	DEPARTMENT_CREATE_FAILED_MSG,
	DEPARTMENT_DELETE_SUCCEEDED_MSG,
	DEPARTMENT_DELETE_FAILED_MSG,
	DEPARTMENT_UPDATE_SUCCEEDED_MSG,
	DEPARTMENT_UPDATE_FAILED_MSG
} from '../../../constants/';
import { AppLoader } from '../../../components';
import { CreateDepartmentForm, EditDepartmentForm } from '../components';
import { createDepartment, deleteDepartment, updateDepartment } from '../../../state';
import { notification, loading } from '../../../services';

class DepartmentPage extends Component {

	onCreateDepartment(data) {
		this.props.storeActions.createDepartment(data).then(() => {
			this.props.resetCreateDepartmentForm();
			notification.showSuccess(DEPARTMENT_CREATE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(DEPARTMENT_CREATE_FAILED_MSG);
		});
	}

	onUpdateDepartment(data) {
		this.props.storeActions.updateDepartment(data).then(() => {
			notification.showSuccess(DEPARTMENT_UPDATE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(DEPARTMENT_UPDATE_FAILED_MSG);
		});
	}

	onDeleteDepartment(data) {
		this.props.storeActions.deleteDepartment(data).then(() => {
			this.props.goToDefault();
			notification.showSuccess(DEPARTMENT_DELETE_SUCCEEDED_MSG);
		}).catch(() => {
			notification.showError(DEPARTMENT_DELETE_FAILED_MSG);
		});
	}

	render() {
		const { department, departmentId, loading } = this.props;
		
		const createFormProps = {
			onSubmit: this.onCreateDepartment.bind(this) 
		};
		const editFormProps = {
			initialValues: department,
			onSubmit: this.onUpdateDepartment.bind(this),
			onDelete: this.onDeleteDepartment.bind(this)
		};

		const isEdit = !!department;
		const isCreate = !departmentId;
		const isNotFound = !!departmentId && !department;

		if (isNotFound) {
			return <h2> Ooops! Department not found!</h2>;
		} else if (!isEdit && !isCreate) {
			return <h2> Ooops! Something goes wrong!</h2>;
		}

		return (
			<div>
				{ !departmentId && <CreateDepartmentForm {...createFormProps} /> }
				{ !!department && <EditDepartmentForm {...editFormProps} /> }
				{ loading && <AppLoader stretch={true}></AppLoader> }
			</div>
		)
	}
}

const mapStateToProps = (state, { params } ) => ({
	departments: state.departments, 
	employees: state.employees,
	departmentId: params && params.id,
	department: params && params.id && 
		state.departments.find(department => department.id.toString() === params.id.toString()),
	loading: loading.isAnyDepartmentActionLoading(state)
});

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
			createDepartment,
			deleteDepartment,
			updateDepartment
		}, dispatch),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`)),
		resetCreateDepartmentForm: () => dispatch(reset(FORM_NAMES.CREATE_DEPARTMENT))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage)
