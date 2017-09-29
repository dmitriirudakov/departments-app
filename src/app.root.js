import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Header, DepartmentList } from './components';
import { fetchEmployees, fetchDepartments } from './state';

class App extends Component {
	
	componentDidMount() {
		this.props.storeActions.fetchDepartments();
		this.props.storeActions.fetchEmployees();
	}

	render() {
		return (
			<div className="layout">
				<div className="container">
					<div className="col-xs-12">
						<Header></Header>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-5 col-xs-12">
						<div className="well">
							<DepartmentList></DepartmentList>
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

const mapStateToProps = ({ departments, employees }) => ({
	departments,
	employees
});

const mapDispatchToProps = dispatch => {
	return {
		storeActions: bindActionCreators({
			fetchEmployees,
			fetchDepartments
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
