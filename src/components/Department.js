import React, { Component } from 'react';

class Department extends Component {
    render() {    
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">Panel heading</div>
                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                </div>
            </div>
        );
    }
}

export default Department;
