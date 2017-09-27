import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LayoutContainer } from './';
import { EmployeeCreateForm, EmployeeEditForm } from '../components';
import { 
    EMPLOYEE_CREATE_REQUESTED, 
    EMPLOYEE_DELETE_REQUESTED, 
    EMPLOYEE_UPDATE_REQUESTED 
} from '../reducers';

class EmployeePageContainer extends Component {

	render() {
		const { employee, employeeId, departments, onCreate, onUpdate, onDelete } = this.props;
		const createFormProps = { onCreate, departments };
		const editFormProps = { employee, onUpdate, onDelete, departments };

		return (
				<LayoutContainer>
					{ !employeeId && !!departments && <EmployeeCreateForm {...createFormProps} /> }
					{ !!employee && !!departments && <EmployeeEditForm {...editFormProps} /> }
				</LayoutContainer>
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
		onCreate(payload) {
			dispatch({
				type: EMPLOYEE_CREATE_REQUESTED, 
				payload
			});
		},
	
		onUpdate(payload) {
			dispatch({
				type: EMPLOYEE_UPDATE_REQUESTED, 
				payload
			});
		},
	
		onDelete(payload) {
			dispatch({
				type: EMPLOYEE_DELETE_REQUESTED, 
				payload
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePageContainer)
