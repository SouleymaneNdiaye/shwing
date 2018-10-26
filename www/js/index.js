
$("#shwing").on('touchstart click',function(){
    e.preventDefault();
    alert("ceci est une alerte");
});
  function playMP3(src) {
    dialogAlert();
    var media = new Media("/android_asset/www/sounds/shwing.mp3", null, mediaError);
    media.setVolume(1.0);
    // media.play();
}
 
function mediaError(e) {
  alert("code= "+ e.code +" message: " +e.message);
}

function dialogAlert() {
    console.log("dialog");
   var message = "I am Alert Dialog!";
   var title = "ALERT";
   var buttonName = "Alert Button";
   navigator.notification.alert(message, alertCallback, title, buttonName);
   
   function alertCallback() {
      console.log("Alert is Dismissed!");
   }


}




