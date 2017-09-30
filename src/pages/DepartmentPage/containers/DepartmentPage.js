import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import { FORM_NAMES, DEFAULT_ROUTE } from '../../../constants/';
import { CreateDepartmentForm, EditDepartmentForm } from '../components';
import { createDepartment, deleteDepartment, updateDepartment } from '../../../state';

class DepartmentPage extends Component {

	onCreateDepartment(data) {
		this.props.storeActions.createDepartment(data).then(() => {
			this.props.resetCreateDepartmentForm();
		});
	}

	onUpdateDepartment(data) {
		this.props.storeActions.updateDepartment(data);
	}

	onDeleteDepartment(data) {
		this.props.storeActions.deleteDepartment(data).then(() => {
			this.props.goToDefault();
		});
	}

	render() {
		const { department, departmentId } = this.props;
		
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
			</div>
		)
	}
}

const mapStateToProps = ({ departments, employees }, { params } ) => ({
	departments, 
	employees,
	departmentId: params && params.id,
	department: params && params.id && departments.find(department => department.id.toString() === params.id.toString())
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
