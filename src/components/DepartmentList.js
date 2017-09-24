import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Department from './Department';

class DepartmentList extends Component {
  render() {
    const { departments, onCreateDepartmentClick } = this.props;
    
    const departmentItems = departments.map((department) => {
        return <Department department={department} key={department.id} />
    });

    return (
        <div>
            { departmentItems }
            <Button bsStyle="success" onClick={() => onCreateDepartmentClick()}>Create Department</Button>
        </div>
    );
  }
}

DepartmentList.propTypes = {
    departments: PropTypes.array.isRequired
};

const mapStateToProps = ({ departments }) => ({
    departments: departments
});

const mapDispatchToProps = dispatch => {
    return {
        onCreateDepartmentClick: id => {
            dispatch(push(`/department`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
