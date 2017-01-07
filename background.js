/***********************************************************************
* Author: Brendan Scullion
* Date: Jan 7, 2017
***********************************************************************/
function yee(){
    var myAudio = new Audio("Yee.wav");        // create the audio object

    // Set the volume just high enough for someone to hear. 
    // Maybe even lower than this would be better. 
    // You want them to wonder are they hearing things or is it realy there 
    myAudio.volume=0.01; // 0.001 is also a good number. sometimes even 0.01 is too loud.  

    // When the song finishes playing start again
    // this listener listens for when the song has 'ended' and then starts again 
    // putting it in a permanent loop.
    myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);

    // play the soundtrack
    myAudio.play(); 

}

yee();