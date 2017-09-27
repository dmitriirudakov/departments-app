import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LayoutContainer } from './';
import { DepartmentCreateForm, DepartmentEditForm } from '../components';
import {
	DEPARTMENT_CREATE_REQUESTED, 
	DEPARTMENT_DELETE_REQUESTED, 
	DEPARTMENT_UPDATE_REQUESTED 
} from '../reducers';

class DepartmentPageContainer extends Component {

	render() {
		const { department, departmentId, onCreate, onUpdate, onDelete } = this.props;
		const createFormProps = { onCreate };
		const editFormProps = { department, onUpdate, onDelete }
		
		return (
			 <LayoutContainer>
				{ !departmentId && <DepartmentCreateForm {...createFormProps} /> }
				{ !!department && <DepartmentEditForm {...editFormProps} /> }
			</LayoutContainer>
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
		onCreate(payload) {
			dispatch({
				type: DEPARTMENT_CREATE_REQUESTED, 
				payload
			});
		},
	
		onUpdate(payload) {
			dispatch({
				type: DEPARTMENT_UPDATE_REQUESTED, 
				payload
			});
		},
	
		onDelete(payload) {
			dispatch({
				type: DEPARTMENT_DELETE_REQUESTED, 
				payload
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPageContainer)
