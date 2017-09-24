import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';  

class DepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.getFormState = this.getFormState.bind(this);

    const state = {
      createModeProps: {
        title: 'Create Department',
        submitBtnText: 'Create',
        onSubmit: this.onFormSubmit,
        department: null
      },
      editModeProps: {
        title: 'Edit Department',
        submitBtnText: 'Update',
        onSubmit: this.onFormSubmit,
        department: null
      },
      departmentModel: { name: '', id: '' },
    }
    state.formState = this.getFormState(props, state);
    
    this.state = state;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ formState: this.getFormState(nextProps, this.state)})
  }

  getFormState(props, state) {
    const { department, departmentId } = props;
    
    const isCreate = !department && !departmentId;
    const isEdit = !!department && !!departmentId;

    const formState = isCreate ? state.createModeProps : 
                      isEdit ? state.editModeProps : null;

    if (formState) {
      formState.department = Object.assign({}, department || state.departmentModel);
    }
    
    return formState;
  }

  onNameChange(event) {
    let formState = this.state.formState; 
    formState.department = Object.assign({}, formState.department, { name: event.target.value });
    this.setState({formState});
  }

  onFormSubmit() {
  }

  render() {
    const { departmentId } = this.props;
    const { formState } = this.state; 

    return (
        <div>
          { formState &&
            <div>
              <h3>{ formState.title }</h3>
              <form name="department-form">
                <div className="form-group">
                  <div className="input-group">
                    <label className="pull-left" htmlFor="department-name">Department Name:</label>
                    <input type="text" onChange={this.onNameChange} value={formState.department.name} className="form-control" id="department-name" aria-describedby="department-name" />
                  </div>
                </div>
                <Button bsStyle="success" onClick={() => formState.onSubmit()}>{formState.submitBtnText}</Button>
              </form> 
            </div>
          }
          { !formState &&
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
