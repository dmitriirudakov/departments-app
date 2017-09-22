import React, { Component } from 'react';

class EmployeeForm extends Component {
  render() {
    return (
        <div>
            <form name="employee-form">
                <div className="form-group">
                    <label className="pull-left" htmlFor="first-name">First Name:</label>
                    <input type="text" className="form-control" id="first-name" aria-describedby="first-name" />
                </div>
                <div className="form-group">
                    <label className="pull-left" htmlFor="last-name">Last Name:</label>
                    <input type="text" className="form-control" id="last-name" aria-describedby="last-name" />
                </div>
                <div className="form-group">
                    <label className="pull-left" htmlFor="department">Department:</label>
                    <select className="form-control" id="department">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
              </div>
            </form>
        </div>
    );
  }
}

export default EmployeeForm;
