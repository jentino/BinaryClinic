//////////////////////////////////////////////////// PLAY TICKING SOUND 

function playSound() {
		var sound = document.getElementById("audio");
		sound.currentTime = 0;
		sound.play();	  
}

function playSoundTradeButtons(q) {
		//alert(q);
		var sound = document.getElementById("audio"+q);
		sound.currentTime = 0;
		sound.play();	  
}

function playSoundCustom(q) {
		//alert(q);

		var sound = document.getElementById("audio"+q);
    sound.play(); 
  //       sound.addEventListener("canplaythrough", function(){
  //           sound.play(); 
  //       }, false);

		// sound.currentTime = 0;
  //       sound.src = "";
  //       sound.src = "sounds/"+q+".wav";
		
}


		// var audioo = document.createElement("audio");

  //       // Lets add an event listener to play when we are ready to start playing
  //       audioo.addEventListener("canplaythrough", function(){
  //           audioo.play(); 
  //       }, false); 

  //       function playSound(q) {        
  //            audioo.src = "";
  //            audioo.src = "sounds/"+q+".wav";             
  //       } 

  //       function playAgain() { 
  //            // Let's check if we are ready enough to play
  //            if(audioo.readyState === 4){                       
  //                audioo.pause(); // first pause        
  //                audioo.currentTime = 0; // then reset           
  //                audioo.play(); // then play
  //            } else {
  //                // else inform us that we are not ready to play yet.
  //                alert("Audio not ready yet.");
  //            }
  //       } 