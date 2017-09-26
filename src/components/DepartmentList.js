import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Department from './Department';
import DepartmentDefault from './DepartmentDefault';

class DepartmentList extends Component {
  render() {
    const { departments } = this.props;
    
    const departmentItems = departments.map((department) => {
        return <Department department={department} key={department.id} />
    });

    return (
        <div>
            { departmentItems }
            <DepartmentDefault />
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

export default connect(mapStateToProps)(DepartmentList);
