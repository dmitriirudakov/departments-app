import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

class DepartmentForm extends Component {

	static propTypes = {
		onCreate: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.onNameChange = this.onNameChange.bind(this);
		this.createDepartment = this.createDepartment.bind(this);

		this.state = { department: { name: '' } };
	}

	createDepartment(event) {
		event && event.preventDefault();
		this.props.onCreate(this.state.department);
	}
	
	onNameChange(event) {
		let department = this.state.department;
		this.setState({department: Object.assign({}, department, { name: event.target.value })});
	}

	render() {
		const { department } = this.state;
		const { createDepartment, onNameChange } = this;

		return (<div>
					<h3>Create Department</h3>
					<form name="department-form" onSubmit={createDepartment}>
						<div className="form-group">
							<div className="input-group">
								<label className="pull-left" htmlFor="department-name">Department Name:</label>
								<input type="text" onChange={onNameChange} value={department.name} className="form-control" id="department-name" aria-describedby="department-name" />
							</div>
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

export default DepartmentForm;
