import React, { Component } from 'react';
import './App.css';
import DepartmentList from '../components/DepartmentList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-xs-3">
            <DepartmentList></DepartmentList>
          </div>
          <div className="col-xs-9">
            { this.props.children }          
          </div>
       </div>
      </div>
    );
  }
}

export default App;
