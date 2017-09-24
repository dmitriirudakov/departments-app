import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

class Header extends Component {
  render() {
    const { onAddEmployeeClick, onAddDepartmentClick } = this.props;
    
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ButtonGroup>
                    <Button className="navbar-btn" bsStyle="primary" onClick={() => onAddDepartmentClick()}>New Department</Button>
                    <Button className="navbar-btn" bsStyle="primary" onClick={() => onAddEmployeeClick()}>New Employee</Button>
                </ButtonGroup>
            </div>
        </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddDepartmentClick: id => {
            dispatch(push(`/department`))
        },
        onAddEmployeeClick: id => {
            dispatch(push(`/employee`))
        }   
    }
}

export default connect(undefined, mapDispatchToProps)(Header);
