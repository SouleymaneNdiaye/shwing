

document.getElementById('shwing').addEventListener('click', function(){
    console.log('im on it');
            // Play the audio file at url
    var my_media = new Media('img/shwing/shwing.wav',
        // success callback
        function() {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function(err) {
            console.log("playAudio():Audio Error: "+err);
    });

    // Play audio
    my_media.play();
});
 



