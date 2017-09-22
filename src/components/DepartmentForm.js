import React, { Component } from 'react';

class DepartmentForm extends Component {
  render() {
    return (
        <div>
          <form name="department-form">
              <div className="input-group">
                <label className="pull-left" htmlFor="department-name">Department Name:</label>
                <input type="text" className="form-control" id="department-name" aria-describedby="department-name" />
              </div>
          </form>
        </div>
    );
  }
}

export default DepartmentForm;
