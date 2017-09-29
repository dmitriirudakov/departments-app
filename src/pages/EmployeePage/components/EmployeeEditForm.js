import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { employeeRequiredProp, departmentArrayRequiredProp } from '../../../constants';

class EmployeeEditForm extends Component {

	static propTypes = {
		employee: employeeRequiredProp,
		departments: departmentArrayRequiredProp,
		onDelete: PropTypes.func.isRequired,
		onUpdate: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		// TODO: currying
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		this.onDepartmentChange = this.onDepartmentChange.bind(this);
		
		this.updateEmployee = this.updateEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);

		this.state = {
			employee: Object.assign({}, props.employee)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.employee !== this.state.employee) {
			this.setState({ employee: Object.assign({}, nextProps.employee) });
		}
	}

	onFirstNameChange(event) {
		let employee = this.state.employee; 
		this.setState({employee: Object.assign({}, employee, { firstName: event.target.value })});
	}

	onLastNameChange(event) {
		let employee = this.state.employee; 
		this.setState({employee: Object.assign({}, employee, { lastName: event.target.value })});
	}

	onDepartmentChange(event) {
		let employee = this.state.employee; 
		this.setState({employee: Object.assign({}, employee, { departmentId: event.target.value })});
	}

	updateEmployee(event) {
		event && event.preventDefault();
		this.props.onUpdate(this.state.employee);
	}

	deleteEmployee() {
		this.props.onDelete(this.state.employee);
	}

	render() {
		const { departments } = this.props;
		const { employee } = this.state;
		const { updateEmployee, deleteEmployee, 
			onFirstNameChange, onLastNameChange, onDepartmentChange } = this; 

		return (
			<div>
				<h3>Edit Employee</h3>
				<form name="employee-form" onSubmit={updateEmployee}>
					<div className="form-group">
						<label className="pull-left" htmlFor="first-name">First Name:</label>
						<input type="text" required onChange={onFirstNameChange} value={employee.firstName} className="form-control" id="first-name" aria-describedby="first-name" />
					</div>
					<div className="form-group">
						<label className="pull-left" htmlFor="last-name">Last Name:</label>
						<input type="text" required onChange={onLastNameChange} value={employee.lastName} className="form-control" id="last-name" aria-describedby="last-name" />
					</div>
					<div className="form-group">
						<label className="pull-left" htmlFor="department">Department:</label>
						<select onChange={onDepartmentChange} value={employee.departmentId} className="form-control" id="department">
							<option key={'default'} value="" disabled={true}>-- Select Department --</option>
						{ 
							departments.map((department) => {
								return <option key={department.id} value={department.id}>{department.name}</option>
							})
						}
						</select>
					</div>
					<ButtonToolbar>
						<ButtonGroup>
							<Button bsStyle="success" type="submit">Save</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button bsStyle="danger" onClick={() => deleteEmployee()}>Delete</Button>
						</ButtonGroup>
					</ButtonToolbar>
				</form>
			</div>
		);
	}
}

export default EmployeeEditForm;
