import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { actionArrayRequired } from '../../../constants';

class Actions extends Component {

	static propTypes = {
		actions: actionArrayRequired
	}

	render() {
		const { actions } = this.props;

		const actionsItems = actions.map(action => 
			<Button className={action.className}
				key={action.label}
				bsStyle={action.style}
				onClick={() => action.onClick()}>
				{ action.label }
			</Button>
		);

		return (
			<ButtonGroup>
				{ actionsItems }
			</ButtonGroup>
			);
		}
}

export default Actions;
