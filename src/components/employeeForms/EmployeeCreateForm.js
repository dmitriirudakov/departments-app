import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { departmentArrayRequiredProp } from '../../constants';

class EmployeeCreateForm extends Component {

	static propTypes = {
		departments: departmentArrayRequiredProp,
		onCreate: PropTypes.func.isRequired
	}

	constructor(props) {

		super(props);
		// TODO: currying
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		this.onDepartmentChange = this.onDepartmentChange.bind(this);
		
		this.createEmployee = this.createEmployee.bind(this);

		this.state = {
			employee: { firstName: '', lastName: '', departmentId: '', id: '' },
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

	createEmployee(event) {
		event && event.preventDefault();
		this.props.onCreate(this.state.employee);
	}

	render() {
		const { departments } = this.props;
		const { employee } = this.state;
		const { createEmployee, onFirstNameChange, onLastNameChange, onDepartmentChange } = this; 

		return (
			<div>
				<h3>Create Employee</h3>
				<form name="employee-form" onSubmit={createEmployee}>
					<div className="form-group">
						<label className="pull-left" htmlFor="first-name">First Name:</label>
						<input onChange={onFirstNameChange} value={employee.firstName} type="text" className="form-control" id="first-name" aria-describedby="first-name" />
					</div>
					<div className="form-group">
						<label className="pull-left" htmlFor="last-name">Last Name:</label>
						<input onChange={onLastNameChange} value={employee.lastName} type="text" className="form-control" id="last-name" aria-describedby="last-name" />
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
							<Button bsStyle="success" type="submit">Create</Button>
						</ButtonGroup>
					</ButtonToolbar>
				</form>
			</div>
		);
	}
}

export default EmployeeCreateForm;
