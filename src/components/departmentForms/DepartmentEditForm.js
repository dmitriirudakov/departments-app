import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { departmentRequiredProp } from '../../constants';

class DepartmentForm extends Component {

	static propTypes = {
		department: departmentRequiredProp,
		onDelete: PropTypes.func.isRequired,
		onUpdate: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.onNameChange = this.onNameChange.bind(this);
		this.updateDepartment = this.updateDepartment.bind(this);
		this.deleteDepartment = this.deleteDepartment.bind(this);

		this.state = {
			department: Object.assign({}, props.department),
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.department !== this.state.department) {
			this.setState({ department: Object.assign({}, nextProps.department) });
		}
	}

	updateDepartment(event) {
		event && event.preventDefault();
		this.props.onUpdate(this.state.department).then(() => {
			console.log('success!!!!!')
		});
	}
	
	deleteDepartment() {
		this.props.onDelete(this.state.department);
	}

	onNameChange(event) {
		let department = this.state.department;
		this.setState({department: Object.assign({}, department, { name: event.target.value })});
	}

	render() {
		const { department } = this.state;
		const { deleteDepartment, updateDepartment, onNameChange } = this;

		return (<div>
					<h3>Edit Department</h3>
					<form name="department-form" onSubmit={updateDepartment}>
						<div className="form-group">
							<div className="input-group">
								<label className="pull-left" htmlFor="department-name">Department Name:</label>
								<input type="text" required onChange={onNameChange} value={department.name} className="form-control" id="department-name" aria-describedby="department-name" />
							</div>
						</div>
						<ButtonToolbar>
							<ButtonGroup>
								<Button bsStyle="success" type="submit">Save</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button bsStyle="danger" onClick={() => deleteDepartment()}>Delete</Button>
							</ButtonGroup>
						</ButtonToolbar>
					</form> 
				</div>
		);
	}
}

export default DepartmentForm;
