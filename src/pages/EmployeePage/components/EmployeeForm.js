import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';

import { FormButtons } from '../../../components';
import { FORM_NAMES, FORM_MODES, EMPLOYEE_FORM_FIELDS, departmentArrayRequiredProp, employeeProp } from '../../../constants';

const EmployeeForm = props => {
	const { mode, onSubmit, onDelete, handleSubmit, departments, pristine, loading } = props;
	const isEditMode = mode ===  FORM_MODES.EDIT;
	
	return (
		<div>
			<h3>{ isEditMode ? 'Edit' : 'Create' } Employee</h3>
			<form name="employee-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<label className="pull-left" htmlFor="first-name">First Name*:</label>
					<Field className="form-control" disabled={loading} required pattern="[A-Za-z0-9]{1}" maxLength="30" id="first-name" 
						name={EMPLOYEE_FORM_FIELDS.FIRST_NAME} component="input" type="text" 
						autoComplete="off"/>
				</div>
				<div className="form-group">
					<label className="pull-left" htmlFor="last-name">Last Name*:</label>
					<Field className="form-control" disabled={loading} required pattern="[A-Za-z0-9]{1}" maxLength="30" id="last-name" 
						name={EMPLOYEE_FORM_FIELDS.LAST_NAME} component="input" type="text" 
						autoComplete="off"/>
				</div>
				<div className="form-group">
					<label className="pull-left" htmlFor="department">Department:</label>
					<Field name={EMPLOYEE_FORM_FIELDS.DEPARTMENT_ID} disabled={loading} component="select" className="form-control">
						<option key={'default'} value="" disabled={true}>-- Select Department --</option>
						{ 
							departments.map((department) => {
								return <option key={department.id} value={department.id}>{department.name}</option>
							})
						}
					</Field>
				</div>
				<FormButtons isEditMode={isEditMode} submitDisabled={pristine || loading} onDelete={() => handleSubmit(onDelete)()}/>
			</form> 
		</div>
	)
}

EmployeeForm.propTypes = {
	mode: PropTypes.oneOf([FORM_MODES.CREATE, FORM_MODES.EDIT]),
	onSubmit: PropTypes.func,
	onDelete: PropTypes.func,
	departments: departmentArrayRequiredProp,
	initialValues: employeeProp
};

function employeeFormFactory(formName, mode) {
	return reduxForm({
		form: formName,
		fields: [
			EMPLOYEE_FORM_FIELDS.ID,
			EMPLOYEE_FORM_FIELDS.FIRST_NAME,
			EMPLOYEE_FORM_FIELDS.LAST_NAME,
			EMPLOYEE_FORM_FIELDS.DEPARTMENT_ID
		],
		enableReinitialize: true,
		initialValues: {
			[EMPLOYEE_FORM_FIELDS.ID]: '',
			[EMPLOYEE_FORM_FIELDS.FIRST_NAME]: '',
			[EMPLOYEE_FORM_FIELDS.LAST_NAME]: '',
			[EMPLOYEE_FORM_FIELDS.DEPARTMENT_ID]: ''
		}
	})(props => <EmployeeForm { ...props } mode={mode} />);
}

const CreateEmployeeForm = employeeFormFactory(FORM_NAMES.CREATE_EMPLOYEE, FORM_MODES.CREATE);
const EditEmployeeForm = employeeFormFactory(FORM_NAMES.EDIT_EMPLOYEE, FORM_MODES.EDIT);

export { CreateEmployeeForm, EditEmployeeForm };