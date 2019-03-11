
"use strict";

	// Prompt Analyzer function
	
	function PAnalyze() {
	  this.lastcommand = "";
	}
	
	
    PAnalyze.prototype.command = function(inputwithcursor) {
      var input = inputwithcursor.slice(2, inputwithcursor.length-1)
      consoleText.text = TEXT_PROMPT + "## "+input+"\n";
      this.lastcommand = input;
	  // Password and level evaluation section
	  //debugText.text = " >> ";
	  for (var [passwd, found] of riddles) {
	    //debugText.text += passwd;
	    if ((input == passwd) && (found == 0)) {
		  riddles.set(passwd, 1);
		  securitylevel.level++;
          consoleText.text += TEXT_PASSWDCORRECT;
          pagersound.play();
		  return;
		}
	  }
	  // Debug mode entry control
      if ((debugrequest == 1) && (input == DEBUGPASSWD)) {
		consoleText.text = TEXT_DEBUGENTRY;
		debugmode = 1; debugrequest == 0; this.lastcommand ="";
	  }

	  // Analyze Commands
	  else {
	      if (debugmode == 1) { // Commands in Debug mode
			  debugrequest = 0;
		      switch (input) {
				case "TIMER START":
				  timer.start();
				  consoleText.text += TEXT_TIMERSTART;
				  break;
				case "TIMER STOP":
				  timer.stop();
				  consoleText.text += TEXT_TIMERSTOP;
				  break;
				case "TIMER RESET":
				  timer.init(MAXTIMER);
				  consoleText.text += TEXT_TIMERRESET;
				  break;
				case "DEBUG OFF":
				  consoleText.text += TEXT_USERMODE;
				  debugmode = 0;
				  break;	    
				default:
				  consoleText.text += TEXT_UNKNOWN;
				  syntaxerrorsound.play();
			  }
			}
		  else {              // Commands in user mode	  
		      switch (input) {
				// Debug mode control
				case "DEBUG":
				  consoleText.text += TEXT_DEBUGREQ;
				  debugrequest = 1;
				  break;
				// User commands
				case "TIMER START":
				  timer.start();
				  consoleText.text += TEXT_TIMERSTART;
				  break;
				case "TIMER RESET":
				  if (timer.timeout == 1) {  // Warning : #@ timer can be reset in user mode if timeout has been reached
					timer.init(MAXTIMER);
					consoleText.text += TEXT_TIMERRESET;
				  } else {
					consoleText.text += TEXT_TIMERCANTRESET 
			      }
				  break;
				case "READY":
				  securitylevel.level++;
				case "":
		          debugrequest = 0;
				  break;
				default:
				  debugrequest = 0;
				  consoleText.text += TEXT_UNKNOWN;
				  syntaxerrorsound.play();
			  }
		  }
	  }
	}
    PAnalyze.prototype.get = function () {  } 	
      	
