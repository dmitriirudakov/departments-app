import React, { Component } from 'react';
import './App.css';
import DepartmentList from '../components/DepartmentList';
import Header from '../components/Header';

class App extends Component {
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

export default App;
