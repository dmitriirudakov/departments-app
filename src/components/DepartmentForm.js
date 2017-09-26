import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { 
  DEPARTMENT_CREATE_REQUESTED, 
  DEPARTMENT_DELETE_REQUESTED, 
  DEPARTMENT_UPDATE_REQUESTED 
} from '../redux/reducers/departmentsReducer';

class DepartmentForm extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.getFormState = this.getFormState.bind(this);

    this.createDepartment = this.createDepartment.bind(this);
    this.updateDepartment = this.updateDepartment.bind(this);
    this.deleteDepartment = this.deleteDepartment.bind(this);

    const state = {
      createModeProps: {
        title: 'Create Department',
        submitBtnText: 'Create',
        onSubmit: this.createDepartment,
        removable: false,
        department: null
      },
      editModeProps: {
        title: 'Edit Department',
        submitBtnText: 'Save',
        onSubmit: this.updateDepartment,
        removable: true,
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

  createDepartment(event) {
    event && event.preventDefault();
    this.props.dispatch({
      type: DEPARTMENT_CREATE_REQUESTED, 
      payload: this.state.formState.department
    });
  }

  updateDepartment(event) {
    event && event.preventDefault();
    this.props.dispatch({
      type: DEPARTMENT_UPDATE_REQUESTED, 
      payload: this.state.formState.department
    });
  }
  
  deleteDepartment() {
    this.props.dispatch({
      type: DEPARTMENT_DELETE_REQUESTED, 
      payload: this.state.formState.department
    });
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

  render() {
    const { departmentId } = this.props;
    const { formState } = this.state; 
    const { deleteDepartment } = this;

    return (
        <div>
          { formState &&
            <div>
              <h3>{ formState.title }</h3>
              <form name="department-form" onSubmit={formState.onSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <label className="pull-left" htmlFor="department-name">Department Name:</label>
                    <input type="text" onChange={this.onNameChange} value={formState.department.name} className="form-control" id="department-name" aria-describedby="department-name" />
                  </div>
                </div>
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button bsStyle="success" type="submit">{formState.submitBtnText}</Button>
                  </ButtonGroup>
                  { formState.removable && 
                  <ButtonGroup>
                    <Button bsStyle="danger" onClick={() => deleteDepartment()}>Delete</Button>
                  </ButtonGroup> }
               </ButtonToolbar>
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
  department: params.id && departments.find(department => department.id.toString() === params.id.toString())
});

export default connect(mapStateToProps)(DepartmentForm);
