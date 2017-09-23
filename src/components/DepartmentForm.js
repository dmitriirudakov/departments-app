import React, { Component } from 'react';
import { connect } from 'react-redux';

class DepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    let department = Object.assign(this.props.department, { name: event.target.value });
    this.setState({department});
  }

  render() {
    const { department, departmentId } = this.props;
    return (
        <div>
          { !department && !departmentId &&
            <div>
              <h3>Create new Department</h3>
              <form name="department-form">
                <div className="input-group">
                  <label className="pull-left" htmlFor="department-name">Department Name:</label>
                  <input type="text" className="form-control" id="department-name" aria-describedby="department-name" />
                </div>
              </form> 
            </div>
          }
          { !!department && !!departmentId &&
            <div>
              <h3>Edit Department</h3>
              <form name="department-form">
                <div className="input-group">
                  <label className="pull-left" htmlFor="department-name">Department Name:</label>
                  <input type="text" onChange={this.onNameChange} value={department.name} className="form-control" id="department-name" aria-describedby="department-name" />
                </div>
              </form> 
            </div>
          }
          { !department && !!departmentId &&
            <h3>
              Department with id '{departmentId}' not found!
            </h3>
          }
        </div>
    );
  }
}

const mapStateToProps = ({ departments }, { params } ) => ({
  departmentId: params && params.id,
  department: departments.find(department => Number(department.id) === Number(params.id))
});

export default connect(mapStateToProps)(DepartmentForm);
