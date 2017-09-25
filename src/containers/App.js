import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DepartmentList from '../components/DepartmentList';
import Header from '../components/Header';
import { EMPLOYEES_FETCH_REQUESTED } from '../redux/reducers/employeesReducer';
import { DEPARTMENTS_FETCH_REQUESTED } from '../redux/reducers/departmentsReducer';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({type: EMPLOYEES_FETCH_REQUESTED});
    this.props.dispatch({type: DEPARTMENTS_FETCH_REQUESTED});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-xs-12">
            <Header></Header>
        </div>
        <div className="col-xs-3">
            <div className="well">
              <DepartmentList></DepartmentList>
            </div>
          </div>
          <div className="col-xs-9">
            <div className="well">
              { this.props.children }          
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default connect()(App);
