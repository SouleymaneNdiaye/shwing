
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
   document.querySelector('#shwing').addEventListener("touchend", playMP3, false);
};


function playMP3(src) {
    var mp3URL = "/assets/www/sounds/shwing.mp3";
    var media = new Media(src, null, mediaError);
    media.setVolume(1.0);
    media.play();
    var media2 = new Media(mp3URL, null, mediaError);
    media2.play();
}
 
function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}



