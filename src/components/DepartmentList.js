import React, { Component } from 'react';
import Department from './Department';

class DepartmentList extends Component {
  render() {
    let departments = [0, 1];
    
    const departmentItems = departments.map((department) => {
        return <Department key={department} />
    });

    return (
        <div>
            { departmentItems }
        </div>
    );
  }
}

export default DepartmentList;
