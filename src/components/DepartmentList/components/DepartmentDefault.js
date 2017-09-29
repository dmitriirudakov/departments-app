import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { employeeArrayRequiredProp } from '../../../constants';
import { EmployeeList } from './';

class DepartmentDefault extends Component {

	static propTypes = {
		employees: employeeArrayRequiredProp,
		onEmployeeClick: PropTypes.func.isRequired
	};

	render() {    
		const { employees, onEmployeeClick } = this.props;

		if (!employees || !employees.length) {
			return false;
		}

		const employeeListProps = { employees, onEmployeeClick };

		return (
			<div>
				<div className="panel panel-primary">
					<div className="panel-heading">
						-- No Department --
					</div>
					<EmployeeList {...employeeListProps} />
				</div>
			</div>
		);
	}
}

export default DepartmentDefault;
