function yee(){
    var myAudio = new Audio("Yee.wav");        // create the audio object
    //myAudio.src = "sounds/sound.wav"; // assign the audio file to it
    myAudio.volume=.01;
    myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    //myAudio.load()
    myAudio.play(); 

}

yee()