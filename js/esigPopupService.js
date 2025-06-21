import messagingService from 'js/messagingService';

/**
 * Service that shows a popup for the e-signature dialog.
 */
export default function esigPopupService() {
    const exports = {};

    /**
     * Displays a basic notification indicating the e-signature dialog opened.
     */
    exports.showPopup = function() {
        messagingService.showInfo('E-signature dialog opened.');
    };

    return exports;
}
