import app from 'app';
import esigPopupService from 'js/esigPopupService';

/**
 * Initializes the e-signature module and registers the service.
 */
export function initialize() {
    app.factory('esigPopupService', esigPopupService);
}

export default {
    initialize
};
