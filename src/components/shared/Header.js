import React, { Component } from 'react';

import { actionArrayRequired } from '../../constants';
import { Actions } from './';

class Header extends Component {

	static propTypes = {
		actions: actionArrayRequired
	}

	render() {
		const { actions } = this.props;
		
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					{ Array.isArray(actions) && <Actions actions={actions} /> }
				</div>
			</nav>
			);
		}
}

export default Header;
