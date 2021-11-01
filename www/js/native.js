function onDeviceReady() {
    
    //alert("Corodova à finis de charger!");
    window.addEventListener("batterystatus", onBatteryStatus, false);
    //checkConnection();
    //window.addEventListener("online", onOnline, false);
    document.addEventListener("resume", onResume, false);
    
}

function onResume() {
    
    //console.log("Test!");
    checkConnection();
    document.addEventListener("online", onOnline, false);

}

document.addEventListener("deviceready", onDeviceReady, false);

function onBatteryStatus(status) {
    
    console.log(`Niveau de la batterie: ${status.level}\nAppareil brancher? ${status.isPlugged}`);
    
}

function checkConnection() {
    
    var networkState = navigator.connection.type;

    var states = {};
    states[navigator.connection.UNKNOWN] = 'Connexion inconnue';
    states[navigator.connection.ETHERNET] = 'Connexion Ethernet';
    states[navigator.connection.WIFI] = 'Connexion Wifi';
    states[navigator.connection.CELL_2G] = 'Connexion 2G';
    states[navigator.connection.CELL_3G] = 'Connexion 3G';
    states[navigator.connection.CELL_4G] = 'Connexion 4G';
    states[navigator.connection.CELL] = 'Connexion généric';
    states[navigator.connection.NONE] = 'Pas de connexion';

    console.log(`Type de connexion: ${states[networkState]}`);

}

function onOnline() {
    
    console.log("Il y a du réseaux!");

}

//document.addEventListener("deviceready", onDeviceReady, false);