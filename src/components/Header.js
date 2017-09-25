import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button, ButtonGroup } from 'react-bootstrap';

class Header extends Component {
  render() {
    const { onNewEmployeeClick, onNewDepartmentClick } = this.props;
    
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ButtonGroup>
                    <Button className="navbar-btn" bsStyle="success" onClick={() => onNewDepartmentClick()}>New Department</Button>
                    <Button className="navbar-btn" bsStyle="success" onClick={() => onNewEmployeeClick()}>New Employee</Button>
                </ButtonGroup>
            </div>
        </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewDepartmentClick: id => {
            dispatch(push(`/department`))
        },
        onNewEmployeeClick: id => {
            dispatch(push(`/employee`))
        }   
    }
}

export default connect(undefined, mapDispatchToProps)(Header);
