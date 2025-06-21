/**
 * Opens an Azure-AD popup that uses the “Teamcenter_eSig” Application-ID.
 * After Azure forces credentials/MFA, we complete the sign-off via SOA.
 */
import soaSvc from 'soa/kernel/soaService';
import msgSvc from 'js/messagingService';

const APP_ID = 'Teamcenter_eSig';
const LOGIN_URL = `/login?applicationId=${APP_ID}&returnUrl=`;

export function openEsigPopup( data ) {
    const popup = window.open(
        LOGIN_URL + encodeURIComponent( window.location.href ),
        'eSigLogin',
        'width=650,height=750,noopener,noreferrer'
    );

    if ( !popup ) {
        msgSvc.showError( 'Please enable pop-ups to complete e-Signature.' );
        return;
    }

    window.addEventListener( 'message', function onMsg( ev ) {
        if ( ev.data !== 'esig-ok' ) { return; }
        window.removeEventListener( 'message', onMsg );

        // Standard SOA for finishing the sign-off task
        soaSvc.postUnchecked(
            'Workflow-2014-06-Workflow',
            'performSignoff',
            { signOff: data.selectedObjects }
        ).then( () => msgSvc.showInfo( 'Sign-off completed.' ) )
         .catch( err  => msgSvc.showError( err.message ) );
    }, { once: true } );
}
