import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';  
import { 
    EMPLOYEE_CREATE_REQUESTED, 
    EMPLOYEE_DELETE_REQUESTED, 
    EMPLOYEE_UPDATE_REQUESTED 
} from '../redux/reducers/employeesReducer';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        // TODO: currying
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onDepartmentChange = this.onDepartmentChange.bind(this);
        
        this.createEmployee = this.createEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

        this.getFormState = this.getFormState.bind(this);

        const state = {
            createModeProps: {
            title: 'Create Employee',
            submitBtnText: 'Create',
            onSubmit: this.createEmployee,
            removable: false,
            employee: null
            },
            editModeProps: {
            title: 'Edit Employee',
            submitBtnText: 'Save',
            onSubmit: this.updateEmployee,
            removable: true,
            employee: null
            },
            employeeModel: { firstName: '', lastName: '', departmentId: '', id: '5' },
            // TODO: generate id as uuid on backend
        }
        state.formState = this.getFormState(props, state);
        
        this.state = state;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ formState: this.getFormState(nextProps, this.state)})
    }

    getFormState(props, state) {
        const { employee, employeeId } = props;
        
        const isCreate = !employee && !employeeId;
        const isEdit = !!employee && !!employeeId;

        const formState = isCreate ? state.createModeProps : 
                            isEdit ? state.editModeProps : null;

        if (formState) {
            formState.employee = Object.assign({}, employee || state.employeeModel);
        }
        
        return formState;
    }

    onFirstNameChange(event) {
        let formState = this.state.formState; 
        formState.employee = Object.assign({}, formState.employee, { firstName: event.target.value });
        this.setState({formState});
    }

    onLastNameChange(event) {
        let formState = this.state.formState; 
        formState.employee = Object.assign({}, formState.employee, { lastName: event.target.value });
        this.setState({formState});
    }

    onDepartmentChange(event) {
        let formState = this.state.formState; 
        formState.employee = Object.assign({}, formState.employee, { departmentId: event.target.value });
        this.setState({formState});
    }

    createEmployee() {
        console.log('create employee', this.state.formState.employee);
        this.props.dispatch({
            type: EMPLOYEE_CREATE_REQUESTED, 
            payload: this.state.formState.employee
        });
    }

    updateEmployee() {
        console.log('update employee', this.state.formState.employee);
        this.props.dispatch({
            type: EMPLOYEE_UPDATE_REQUESTED, 
            payload: this.state.formState.employee
        });
    }

    deleteEmployee() {
        console.log('delete employee', this.state.formState.employee);
        this.props.dispatch({
            type: EMPLOYEE_DELETE_REQUESTED, 
            payload: this.state.formState.employee
        });
    }

    render() {
        const { departments, employeeId } = this.props;
        const { formState } = this.state;
        const { deleteEmployee } = this; 

        return (
            <div>
                { formState &&
                <div>
                    <h3>{ formState.title }</h3>
                    <form name="employee-form">
                        <div className="form-group">
                            <label className="pull-left" htmlFor="first-name">First Name:</label>
                            <input onChange={this.onFirstNameChange} value={formState.employee.firstName} type="text" className="form-control" id="first-name" aria-describedby="first-name" />
                        </div>
                        <div className="form-group">
                            <label className="pull-left" htmlFor="last-name">Last Name:</label>
                            <input onChange={this.onLastNameChange} value={formState.employee.lastName} type="text" className="form-control" id="last-name" aria-describedby="last-name" />
                        </div>
                        <div className="form-group">
                            <label className="pull-left" htmlFor="department">Department:</label>
                            <select onChange={this.onDepartmentChange} value={formState.employee.departmentId} className="form-control" id="department">
                                <option key={'default'} value="" disabled={true}>-- Select Department --</option>
                            { 
                                departments.map((department) => {
                                    return <option key={department.id} value={department.id}>{department.name}</option>
                                })
                            }
                            </select>
                        </div>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button bsStyle="success" onClick={() => formState.onSubmit()}>{formState.submitBtnText}</Button>
                            </ButtonGroup>
                            { formState.removable && 
                            <ButtonGroup>
                                <Button bsStyle="danger" onClick={() => deleteEmployee()}>Delete</Button>
                            </ButtonGroup> }
                        </ButtonToolbar>
                    </form>
                </div>
                }
                { !formState &&
                    <h3>
                    Employee with id '{employeeId}' not found!
                    </h3>
                }
            </div>
        );
    }
}

const mapStateToProps = ({ departments, employees }, { params } ) => ({
    employeeId: params && params.id,
    employee: employees.find(employee => Number(employee.id) === Number(params.id)),
    departments: departments
});
  
export default connect(mapStateToProps)(EmployeeForm);
