 "use strict";
 
    // Keyboard related functions  /////////////////////////////////////
    const KSPACE = 32;
    const KBACKSPACE = 8;
    const KRETURN = 13;
    const KUPARROW = 38;
    const KDOWNARROW = 40;
    const KEQUAL = 61;
    const CCURSOR = String.fromCharCode(95);

	function Keyboardread() {
	  let key = {};
	  key.code = undefined;
	  key.press = undefined;
	  key.release = undefined;
	  //The `downHandler`
	  key.downHandler = event => {
		key.code = event.keyCode;
		if (key.code==122) return false;
        if ( ((key.code > 64) && (key.code < 91))
           ||((key.code > 47) && (key.code < 58))
           ||((key.code > 37) && (key.code < 41))
           || ( key.code == KSPACE ) || (key.code == KBACKSPACE) || (key.code == KRETURN) || (key.code == KEQUAL)) {
		  key.press();  
  	      event.preventDefault();
        }   
	  };
	  //The `upHandler`
	  key.upHandler = event => {
		//key.release();
	    event.preventDefault();
	  };
	  
	  //Attach event listeners
	  window.addEventListener(
	    "keydown", key.downHandler.bind(key), false
	  );
	  window.addEventListener(
	    "keyup", key.upHandler.bind(key), false
	  );
	  return key;
	}

    // KEYBOARD READER /////////////////////////////////////////////////
    let keyreader = Keyboardread();
    keyreader.press = () => {
      if (keyreader.code == KRETURN) {
	 	//PAnalyze(promptText.text);
	 	consolePrompt.command(promptText.text);
        promptText.text = PS1+CCURSOR;
	    returnsound.play();
  	  }
  	  else if (keyreader.code == KUPARROW) {
		promptText.text = PS1+consolePrompt.lastcommand+CCURSOR;
	  }
	  else if (keyreader.code == KDOWNARROW) {
		promptText.text = PS1+CCURSOR;
	  }
	  else if (keyreader.code != KBACKSPACE) {
		promptText.text = promptText.text.slice(0, promptText.text.length-1) + String.fromCharCode(keyreader.code)+CCURSOR;
		clicksound.play();
      }
	  else if ((keyreader.code == KBACKSPACE) && (promptText.text.length > 3)) {
	    promptText.text = promptText.text.slice(0, promptText.text.length-2) + CCURSOR;
	    backspacesound.play();
	  }
	  else {
      }
	}
