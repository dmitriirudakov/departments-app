import { notify } from 'react-notify-toast';

import { NOTIFICATION_TYPES, NOTIFICATION_COLORS, NOTIFICATION_TIMEOUT } from '../constants';

const show = notify.createShowQueue();

function showSuccess(message) {
	show(message, NOTIFICATION_TYPES.CUSTOM, 
		NOTIFICATION_TIMEOUT, NOTIFICATION_COLORS.SUCCESS);
}

function showError(message) {
	show(message, NOTIFICATION_TYPES.CUSTOM, 
		NOTIFICATION_TIMEOUT, NOTIFICATION_COLORS.ERROR);
}

const notification = { showSuccess, showError }
export { notification };