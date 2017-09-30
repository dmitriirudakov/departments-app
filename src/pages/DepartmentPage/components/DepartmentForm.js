import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';

import { FormButtons } from '../../../components';
import { FORM_NAMES, FORM_MODES, DEPARTMENT_FORM_FIELDS, departmentProp } from '../../../constants/';

const DepartmentForm = props => {
	const { mode, onSubmit, onDelete, handleSubmit } = props;
	const isEditMode = mode === FORM_MODES.EDIT;
	return (
		<div>
			<h3>{ isEditMode ? 'Edit' : 'Create' } Department</h3>
			<form name="department-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<div className="input-group">
						<label className="pull-left" htmlFor="department-name">Department Name:</label>
						<Field className="form-control" required id="department-name" 
							name={DEPARTMENT_FORM_FIELDS.NAME} component="input" type="text" 
							autoComplete="off"/>
					</div>
				</div>
				<FormButtons isEditMode={isEditMode} onDelete={() => handleSubmit(onDelete)()}/>
			</form>
		</div>
	)
}

DepartmentForm.propTypes = {
	mode: PropTypes.oneOf([FORM_MODES.CREATE, FORM_MODES.EDIT]),
	onSubmit: PropTypes.func,
	onDelete: PropTypes.func,
	initialValues: departmentProp
};

function departmentFormFactory(formName, mode) {
	return reduxForm({
		form: formName,
		fields: [DEPARTMENT_FORM_FIELDS.Id, DEPARTMENT_FORM_FIELDS.NAME],
		enableReinitialize: true,
		initialValues: {
			[DEPARTMENT_FORM_FIELDS.ID]: '',
			[DEPARTMENT_FORM_FIELDS.NAME]: ''
		}
	})(props => <DepartmentForm { ...props } mode={mode} />);
}

const CreateDepartmentForm = departmentFormFactory(FORM_NAMES.CREATE_DEPARTMENT, FORM_MODES.CREATE);
const EditDepartmentForm = departmentFormFactory(FORM_NAMES.EDIT_DEPARTMENT, FORM_MODES.EDIT);

export { CreateDepartmentForm, EditDepartmentForm };