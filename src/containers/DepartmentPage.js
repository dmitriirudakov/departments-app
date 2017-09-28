import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Layout } from './';
import { DepartmentCreateForm, DepartmentEditForm } from '../components';
import { createDepartment, deleteDepartment, updateDepartment } from '../actions';

class DepartmentPage extends Component {

	render() {
		const { department, departmentId } = this.props;
		const { onCreate, onUpdate, onDelete } = this.props.storeActions;
		const createFormProps = { onCreate };
		const editFormProps = { department, onUpdate, onDelete }
		
		return (
			 <Layout>
				{ !departmentId && <DepartmentCreateForm {...createFormProps} /> }
				{ !!department && <DepartmentEditForm {...editFormProps} /> }
			</Layout>
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
			onCreate: createDepartment,
			onDelete: deleteDepartment,
			onUpdate: updateDepartment
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage)
