import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Header, DepartmentList } from '../components';
import { EMPLOYEES_FETCH_REQUESTED, DEPARTMENTS_FETCH_REQUESTED } from '../reducers';

class Layout extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerActions: [{
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

	componentDidMount() {
		this.props.dispatch({type: EMPLOYEES_FETCH_REQUESTED});
		this.props.dispatch({type: DEPARTMENTS_FETCH_REQUESTED});
	}

	render() {
		const { headerActions } = this.state;
		const { employees, departments, onDepartmentClick, onEmployeeClick } = this.props;
		const departmentListProps = { departments, employees, onDepartmentClick, onEmployeeClick };

		return (
			<div className="layout">
				<div className="container">
					<div className="col-xs-12">
						<Header actions={headerActions}></Header>
				</div>
				<div className="col-lg-3 col-md-4 col-sm-5 col-xs-12">
						<div className="well">
							{ Array.isArray(departments) && Array.isArray(employees) && 
								<DepartmentList {...departmentListProps}></DepartmentList> 
							}
						</div>
					</div>
					<div className="col-lg-9 col-md-8 col-sm-7 col-xs-12">
						<div className="well">
							{ this.props.children }
						</div>
					</div>
			 </div>
			</div>
		);
	}
}

const mapStateToProps = ({ departments, employees }, { params } ) => ({
	departments, 
	employees
});

const mapDispatchToProps = dispatch => {
	return {
		onDepartmentClick: id => {
			dispatch(push(`/department/${id}`))
		},
		onEmployeeClick: id => {
			dispatch(push(`/employee/${id}`))
		},
		onNewDepartmentClick: id => {
			dispatch(push(`/department`))
		},
		onNewEmployeeClick: id => {
			dispatch(push(`/employee`))
		},
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
