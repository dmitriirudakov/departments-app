import React, { Component } from 'react';
// import DepartmentForm from '../components/DepartmentForm';
import DepartmentList from '../components/DepartmentList';
import EmployeeForm from '../components/EmployeeForm';
// import EmployeeList from '../components/EmployeeList';

class DepartmentsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-3">
          <DepartmentList></DepartmentList>
        </div>
        <div className="col-xs-9">
          <EmployeeForm></EmployeeForm>
        </div>
      </div>
    );
  }
}

export default DepartmentsPage;
