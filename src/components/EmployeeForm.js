import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeForm extends Component {
  render() {
    const { departments } = this.props;
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
                    { 
                        departments.map((department) => {
                            return <option key={department.id} value={department.id}>{department.name}</option>
                        })
                    }
                    </select>
              </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ({ departments }) => ({
    departments: departments
  });
  
export default connect(mapStateToProps)(EmployeeForm);
