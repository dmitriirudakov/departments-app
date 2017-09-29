import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { DEPARTMENT_ROUTE, EMPLOYEE_ROUTE } from '../../constants';
import { Actions } from './';

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			actions: [{
				className: 'navbar-btn',
				style: 'success',
				onClick: props.onNewDepartmentClick,
				label: 'New Department'
			},
			{
				className: 'navbar-btn',
				style: 'success',
				onClick: props.onNewEmployeeClick,
				label: 'New Employee'
			}]
		}
	}

	render() {
		const { actions } = this.state;
		
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Actions actions={actions} />
				</div>
			</nav>
			);
		}
}

const mapDispatchToProps = dispatch => {
	return {
		onNewDepartmentClick: id => {
			dispatch(push(DEPARTMENT_ROUTE))
		},
		onNewEmployeeClick: id => {
			dispatch(push(EMPLOYEE_ROUTE))
		}
	}
}

export default connect(null, mapDispatchToProps)(Header);
