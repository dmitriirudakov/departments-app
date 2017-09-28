import PropTypes from 'prop-types';


export const departmentProp = PropTypes.shape({
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
});

export const employeeProp = PropTypes.shape({
	id: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	departmentId: PropTypes.string.isRequired
});

export const departmentRequiredProp = departmentProp.isRequired;
export const employeeRequiredProp = employeeProp.isRequired;
export const departmentArrayRequiredProp = PropTypes.arrayOf(departmentProp).isRequired;
export const employeeArrayRequiredProp = PropTypes.arrayOf(employeeProp).isRequired;

export const action = PropTypes.shape({
	className: PropTypes.string,
	style: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
});

export const actionArrayRequired = PropTypes.arrayOf(action).isRequired;