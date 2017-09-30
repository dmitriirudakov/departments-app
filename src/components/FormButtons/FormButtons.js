import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';

const FormButtons = props => {
	const { isEditMode, onDelete } = props;

	return (
		<ButtonToolbar>
			<ButtonGroup>
				<Button bsStyle="success" type="submit">
					{ isEditMode ? 'Update' : 'Create' }
				</Button>
			</ButtonGroup>
			{ isEditMode && 
				<ButtonGroup>
					<Button bsStyle="danger" onClick={onDelete}>Delete</Button>
				</ButtonGroup>
			}
		</ButtonToolbar>
	);
}

export default FormButtons;